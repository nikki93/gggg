import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import palx from 'palx';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

import './App.css';

const Fib = () => {
  const [message, setMessage] = useState('...');

  const onPressRun = () => {
    const fib = (n: number): number => {
      if (n <= 1) {
        return 1;
      } else {
        return fib(n - 1) + fib(n - 2);
      }
    };

    const startTime = performance.now();
    const fibResult = fib(40);
    const fibTime = 0.001 * (performance.now() - startTime);
    setMessage(`fib: ${fibResult} -- ${fibTime}`);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: uiBackgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={onPressRun}>
        <Text>run!</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 16 }}>{message}</Text>
    </View>
  );
};

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
const canvasBackgroundColor = 'white';
const commonPadding = 38;

interface State {
  scale: number;
}

type NotifyState = () => void;

const state: State = {
  scale: 1,
};

const Canvas = React.memo(({ notifyState }: { notifyState: NotifyState }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasReadyRef = useRef<boolean>(false);

  // Listen for canvas resizing
  useLayoutEffect(() => {
    const measure = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        canvas.width = devicePixelRatio * rect.width;
        canvas.height = devicePixelRatio * rect.height;
        (canvasReadyRef as React.MutableRefObject<boolean>).current = true;
      }
    };
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure);
    };
  }, [canvasRef.current]);

  // Listen for canvas ref
  const setCanvasRef = useCallback((canvas: HTMLCanvasElement) => {
    (canvasRef as React.MutableRefObject<HTMLCanvasElement>).current = canvas;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');

    const setup = () => {
      // Wait until ready
      if (!(canvasReadyRef.current && ctx)) {
        requestAnimationFrame(setup);
        return;
      }
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
        const colorNames = Object.keys(pal);
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
        // Clear
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = canvasBackgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Rects
        for (let i = 0; i < N; ++i) {
          const rect = rects[i];
          ctx.fillStyle = rect.fillStyle;
          const w = state.scale * rect.w;
          const h = state.scale * rect.h;
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
        update();
        draw();
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };
    setup();
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

const UI = ({
  isLandscape,
  stateCounter,
  notifyState,
}: {
  isLandscape: boolean;
  stateCounter: number;
  notifyState: NotifyState;
}) => {
  return (
    <View
      style={{
        flex: 0.5,
        backgroundColor: uiBackgroundColor,
        padding: commonPadding,
        paddingLeft: isLandscape ? 0 : undefined,
        paddingTop: isLandscape ? undefined : 0,
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
      <View>
        <Slider
          value={state.scale}
          min={0}
          max={10}
          step={0.01}
          onChange={(_, value) => {
            state.scale = value as number;
            notifyState();
          }}
        />
        <Typography style={{ paddingTop: commonPadding }}>
          buttons don't do anything, slider scales rectangles
        </Typography>
      </View>
    </View>
  );
};

const App = () => {
  const [stateCounter, setStateCounter] = useState(0);
  const notifyState = useCallback(() => {
    setStateCounter((stateCounter) => stateCounter + 1);
  }, []);

  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>(
    window.innerWidth > window.innerHeight ? 'row' : 'column'
  );

  useEffect(() => {
    const onResize = () => {
      setFlexDirection(window.innerWidth > window.innerHeight ? 'row' : 'column');
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollLock>
          <div style={{ width: '100%', height: '100%' }}>
            <View style={{ width: '100%', height: '100%', flexDirection }}>
              <Canvas notifyState={notifyState} />
              <UI
                isLandscape={flexDirection == 'row'}
                stateCounter={stateCounter}
                notifyState={notifyState}
              />
            </View>
          </div>
        </ScrollLock>
      </SafeAreaView>
    </ThemeProvider>
  );
  return;
};

export default App;
