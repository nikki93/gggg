import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

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
        backgroundColor: '#fff',
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

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    (async () => {
      if (canvasRef) {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const canvas = canvasRef.current;
        const ctx = canvasRef.current.getContext('2d');

        // High-DPI
        const W = 800;
        const H = 450;
        const dpi = devicePixelRatio;
        canvas.width = dpi * W;
        canvas.height = dpi * H;
        ctx.scale(dpi, dpi);

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
          ctx.fillStyle = 'white';
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
          update();
          draw();
          requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      }
    })();
  }, [canvasRef]);

  // Canvas centered in a black box
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <canvas ref={canvasRef} style={{ width: 800, height: 450 }} />
    </View>
  );
};

const UI = () => {};

const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Canvas />
    </View>
  );
  return;
};

export default App;
