import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import ResponsiveCanvas from 'react-responsive-canvas';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import palx from 'palx';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

import './App.css';

const Fib = () => {
  const [message, setMessage] = useState('...');

  const onPressRun = () => {
    const fib = (n) => {
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

const Canvas = () => {
  const setCanvasRef = useCallback((canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');

    const setup = () => {
      // Wait until non-zero size
      let W = canvas.width;
      let H = canvas.height;
      if (W == 0 || H == 0) {
        requestAnimationFrame(setup);
        return;
      }

      // Init
      const N = 10;
      const rects = [];
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
          ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
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
      <View
        style={{
          borderRadius: 6,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
        }}>
        <ResponsiveCanvas canvasRef={setCanvasRef} onResize={() => {}} />
      </View>
    </View>
  );
};

const UI = ({ isLandscape }) => {
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
        <Slider />
      </View>
    </View>
  );
};

const App = () => {
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
              <Canvas />
              <UI isLandscape={flexDirection == 'row'} />
            </View>
          </div>
        </ScrollLock>
      </SafeAreaView>
    </ThemeProvider>
  );
  return;
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (let registration of registrations) {
      registration.update();
    }
  });
}

export default App;
