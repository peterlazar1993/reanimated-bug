import {useMemo} from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useAnimatedKeyboard} from 'react-native-reanimated';

export const GestureHandler = () => {
  const {state} = useAnimatedKeyboard({isStatusBarTranslucentAndroid: true});

  const tapGesture = useMemo(
    () =>
      Gesture.Tap().onEnd(e => {
        console.log(e);
      }),
    [],
  );

  return (
    <GestureDetector gesture={tapGesture}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}
      />
    </GestureDetector>
  );
};
