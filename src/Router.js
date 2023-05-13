import * as React from 'react';

import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './Home';
import {KeyboardExample} from './animated_keyboard/KeyboardExample';
import SmoothScroll from './smooth_scroll/SmoothScroll';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export function Router() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          title: null,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
