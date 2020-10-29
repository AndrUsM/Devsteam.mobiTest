/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { ApplicationNavigation } from './src/router/switch';
import { store } from './src/store/config/store';

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationNavigation />
    </Provider>
  );
};

export default App;
