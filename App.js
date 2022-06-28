import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Root from './src/index';
import store from "./src/store";
import { Provider } from 'react-redux';

export default function App() {
  const [loaded] = useFonts({
    'nunito': require('./assets/fonts/Nunito-Italic-VariableFont_wght.ttf')
  });

  if (!loaded) {
    return <ActivityIndicator />
  }
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}