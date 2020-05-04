import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Button from '@material-ui/core/Button';
import ResponsiveCanvas from 'react-responsive-canvas';

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
        backgroundColor: UI_BACKGROUND_COLOR,
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

const UI_BACKGROUND_COLOR = 'white';
const CANVAS_BACKGROUND_COLOR = '#fdf9f5';

const Canvas = () => {
  const canvasRef = useRef(null);

  const setCanvasRef = useCallback((newRef) => {
    canvasRef.current = newRef;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvasRef.current.getContext('2d');

      const setup = () => {
        // Wait until non-zero size
        let W = canvas.width;
        let H = canvas.height;
        if (W == 0 || H == 0) {
          requestAnimationFrame(setup);
          return;
        }

        // Init
        const N = 5;
        const rects = [];
        {
          // Rects
          for (let i = 0; i < N; ++i) {
            rects[i] = {
              x: W * Math.random(),
              y: H * Math.random(),
              fillStyle: `rgb(${Math.floor(255 * Math.random())}, ${Math.floor(
                255 * Math.random()
              )}, ${Math.floor(255 * Math.random())})`,
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
            fps = nFramesSinceLastFPSUpdate / (t - lastFPSUpdateTime);
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
          ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Rects
          for (let i = 0; i < N; ++i) {
            const rect = rects[i];
            ctx.fillStyle = rect.fillStyle;
            ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
          }

          // FPS
          ctx.fillStyle = 'black';
          ctx.font = '24px sans';
          ctx.fillText(`fps: ${fps.toFixed(2)}`, 24, 48);
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
    }
  }, []);

  useEffect(() => {}, [canvasRef]);

  // Canvas centered in a box
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: UI_BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}>
      <View
        style={{
          borderRadius: 6,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
        }}>
        <ResponsiveCanvas canvasRef={setCanvasRef} />
      </View>
    </View>
  );
};

const UI = () => {
  return (
    <View style={{ flex: 0.5, backgroundColor: UI_BACKGROUND_COLOR }}>
      <View style={{ flexDirection: 'row', padding: 24 }}>
        <Button variant="contained" color="primary">
          hai
        </Button>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Canvas />
      <UI />
    </View>
  );
  return;
};

export default App;
