import * as React from 'react';

import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './Home';
import {KeyboardExample} from './animated_keyboard/KeyboardExample';
import SmoothScroll from './smooth_scroll/SmoothScroll';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandler} from './gesture_handler/GestureHandler';

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          contentStyle: {backgroundColor: 'black'},
          headerStyle: {backgroundColor: 'lightcoral'},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Smooth Scroll"
          options={{title: 'Smooth Scroll'}}
          component={SmoothScroll}
        />
        <Stack.Screen
          name="Animted Keyboard"
          options={{title: 'Animated Keyboard'}}
          component={KeyboardExample}
        />
        <Stack.Screen
          name="Gesture Handler"
          options={{title: 'Gesture Handler'}}
          component={GestureHandler}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
