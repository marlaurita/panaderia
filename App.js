import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Root from './src/index';

export default function App() {
  const [loaded] = useFonts({
    'nunito': require('./assets/fonts/Nunito-Italic-VariableFont_wght.ttf')
  });

  if (!loaded) {
    return <ActivityIndicator />
  }
  return (
    <Root />
  );
}