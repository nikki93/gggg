import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import palx from 'palx';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

import './App.css';

//
// Style
//

const pal = palx('#b81');

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Inter',
    fontSize: 14,
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: pal.indigo[4],
      dark: pal.indigo[5],
    },
    secondary: {
      main: pal.gray[2],
      dark: pal.gray[3],
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const uiBackgroundColor = pal.gray[0];
document.body.style.background = uiBackgroundColor;
document.body.style.removeProperty('overflow');
document.body.style.removeProperty('position');
document.body.style.removeProperty('top');
document.body.style.removeProperty('width');
const canvasBackgroundColor = 'white';
const commonPadding = 38;

//
// Store
//

interface Store {
  scale: number;
}

type NotifyStore = () => void;

const store: Store = {
  scale: 1,
};

//
// Canvas
//

const setupCanvas = (canvas: HTMLCanvasElement) => {
  let W = canvas.width;
  let H = canvas.height;

  // Init
  const N = 100;
  interface Rect {
    x: number;
    y: number;
    fillStyle: string;
    speed: number;
    w: number;
    h: number;
    phase: number;
  }
  const rects: Rect[] = [];
  {
    // Rects
    const colorNames = Object.keys(pal).filter((n) => n !== 'base' && n !== 'black');
    for (let i = 0; i < N; ++i) {
      rects[i] = {
        x: W * Math.random(),
        y: H * Math.random(),
        fillStyle:
          pal[colorNames[Math.floor(Math.random() * colorNames.length)]][
            Math.floor(1 + Math.random() * 5)
          ],
        speed: 0.5 * W * Math.random(),
        w: (W * Math.random()) / 16,
        h: (W * Math.random()) / 16,
        phase: 2 * Math.PI * Math.random(),
      };
    }
  }

  // Update
  let lastUpdateTime = 0.001 * performance.now();
  let lastFPSUpdateTime = lastUpdateTime;
  let nFramesSinceLastFPSUpdate = 0;
  let fps = 0;
  const update = () => {
    // Time
    const t = 0.001 * performance.now();
    const dt = t - lastUpdateTime;
    lastUpdateTime = t;
    ++nFramesSinceLastFPSUpdate;
    if (t - lastFPSUpdateTime > 1) {
      fps = Math.floor(nFramesSinceLastFPSUpdate / (t - lastFPSUpdateTime) + 0.5);
      lastFPSUpdateTime = t;
      nFramesSinceLastFPSUpdate = 0;
    }

    // Rects
    for (let i = 0; i < N; ++i) {
      const rect = rects[i];
      rect.x += rect.speed * Math.sin(t + rect.phase) * dt;
    }
  };

  // Draw
  const draw = () => {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = canvasBackgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Rects
    for (let i = 0; i < N; ++i) {
      const rect = rects[i];
      ctx.fillStyle = rect.fillStyle;
      const w = store.scale * rect.w;
      const h = store.scale * rect.h;
      ctx.fillRect(rect.x - 0.5 * w, rect.y - 0.5 * h, w, h);
    }

    // FPS
    ctx.fillStyle = 'black';
    ctx.font = '28px Inter';
    ctx.textBaseline = 'top';
    ctx.fillText(`fps: ${fps}`, 32, 32);
  };

  // Frame loop
  const frame = () => {
    W = canvas.width;
    H = canvas.height;
    if (__DEV__ && !document.hasFocus()) {
      setTimeout(frame, 120);
    } else {
      update();
      draw();
      requestAnimationFrame(frame);
    }
  };
  requestAnimationFrame(frame);
};

const Canvas = React.memo((props: { notifyStore: NotifyStore }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const readyRef = useRef(false);

  // Listen for window resize
  useLayoutEffect(() => {
    const listener = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        canvas.width = devicePixelRatio * rect.width;
        canvas.height = devicePixelRatio * rect.height;
        readyRef.current = true;
      }
    };
    listener();
    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener);
    const mql = window.matchMedia('(orientation: portrait)');
    mql.addListener(listener);
    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
      mql.removeListener(listener);
    };
  }, [canvasRef.current]);

  // Listen for canvas ref
  const setCanvasRef = useCallback((canvas: HTMLCanvasElement) => {
    (canvasRef as React.MutableRefObject<HTMLCanvasElement>).current = canvas;
    if (!canvas) {
      return;
    }
    const setupWhenReady = () => {
      if (!readyRef.current) {
        requestAnimationFrame(setupWhenReady);
      } else {
        setupCanvas(canvas);
      }
    };
    setupWhenReady();
  }, []);

  // Canvas centered in a box
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: uiBackgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: commonPadding,
      }}>
      <canvas
        ref={setCanvasRef}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 6,
          overflow: 'hidden',
        }}
      />
    </View>
  );
});

//
// UI
//

const UI = (props: { isLandscape: boolean; storeCounter: number; notifyStore: NotifyStore }) => {
  return (
    <View
      style={{
        flex: 0.5,
        backgroundColor: uiBackgroundColor,
        padding: commonPadding,
        paddingLeft: props.isLandscape ? 0 : undefined,
        paddingTop: props.isLandscape ? undefined : 0,
      }}>
      <View style={{ flexDirection: 'row', paddingBottom: commonPadding }}>
        <Button variant="contained" color="primary">
          hai
        </Button>
        <View style={{ width: 24 }} />
        <Button variant="contained" color="secondary">
          ooh
        </Button>
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 0.5 * commonPadding }}>
        <Slider
          value={store.scale}
          min={0}
          max={10}
          step={0.01}
          onChange={(_, value) => {
            store.scale = value as number;
            props.notifyStore();
          }}
        />
      </View>
      <ScrollView
        style={{
          marginHorizontal: -commonPadding,
          marginBottom: !props.isLandscape ? -commonPadding : 0,
        }}>
        <View style={{ paddingHorizontal: commonPadding }}>
          <Typography style={{ paddingTop: 0.5 * commonPadding }}>
            buttons don't do anything, slider scales rectangles
          </Typography>
        </View>
      </ScrollView>
    </View>
  );
};

//
// App
//

const App = () => {
  // Store change notification
  const [storeCounter, setStoreCounter] = useState(0);
  const notifyStore = useCallback(() => {
    setStoreCounter((storeCounter) => storeCounter + 1);
  }, []);

  // Track landscape / portrait
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>(
    window.innerWidth > window.innerHeight ? 'row' : 'column'
  );
  useEffect(() => {
    const listener = () => {
      setFlexDirection(window.innerWidth > window.innerHeight ? 'row' : 'column');
    };
    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener);
    const mql = window.matchMedia('(orientation: portrait)');
    mql.addListener(listener);
    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
      mql.removeListener(listener);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <div style={{ width: '100%', height: '100%', position: 'fixed', overflow: 'hidden' }}>
          <View style={{ width: '100%', height: '100%', flexDirection }}>
            <Canvas notifyStore={notifyStore} />
            <UI
              isLandscape={flexDirection == 'row'}
              storeCounter={storeCounter}
              notifyStore={notifyStore}
            />
          </View>
        </div>
      </SafeAreaView>
    </ThemeProvider>
  );
  return;
};

export default App;
