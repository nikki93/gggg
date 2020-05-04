import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const fib = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

const App = () => {
  const [message, setMessage] = useState('...');

  const onPressRun = () => {
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
      <TouchableOpacity onPress={onPressRun}><Text>run!</Text></TouchableOpacity>
      <Text style={{ marginTop: 16 }}>{message}</Text>
    </View>
  );
};

export default App;
