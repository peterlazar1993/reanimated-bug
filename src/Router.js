import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './Home';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import SmoothScroll from './smooth_scroll/SmoothScroll';
import {KeyboardExample} from './animated_keyboard/KeyboardExample';

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          title: null,
          headerTintColor: 'white',
          contentStyle: {backgroundColor: 'black'},
          headerStyle: {backgroundColor: 'black'},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Smooth Scroll" component={SmoothScroll} />
        <Stack.Screen name="Animted Keyboard" component={KeyboardExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
