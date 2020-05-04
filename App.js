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
    if (canvasRef) {
      const canvas = canvasRef.current;
      const ctx = canvasRef.current.getContext('2d');

      // High-DPI
      canvas.width = 2 * canvas.width;
      canvas.height = 2 * canvas.height;
      ctx.scale(2, 2);

      // Init

      // Update
      let lastUpdateTime = 0.001 * performance.now();
      const update = () => {
        const t = 0.001 * performance.now();
        const dt = t - lastUpdateTime;
        lastUpdateTime = t;
      };

      // Draw
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
      };

      // Frame loop
      const frame = () => {
        update();
        draw();
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }
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

const App = () => {
  return <Canvas />;
};

export default App;
