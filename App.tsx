/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ScrollExample from './scroll_events/ScrollEvents';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollExample />
    </GestureHandlerRootView>
  );
}

export default App;
