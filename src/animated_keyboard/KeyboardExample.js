import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, TextInput} from 'react-native';
import {useAnimatedKeyboard} from 'react-native-reanimated';
import {useEffect} from 'react';

export const KeyboardExample = () => {
  const {state} = useAnimatedKeyboard({isStatusBarTranslucentAndroid: true});

  // ─── Workaround For Broken Status Bar ────────────────────────────────
  // useEffect(() => {
  //   return () => {
  //     StatusBar.setBarStyle('light-content');
  //     StatusBar.setTranslucent(true);
  //     StatusBar.setBackgroundColor('transparent');
  //   };
  // });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}>
      <TextInput
        selectionColor={'pink'}
        style={{
          width: '100%',
          fontSize: 24,
          borderWidth: 1,
          borderRadius: 10,
          padding: 8,
          borderColor: 'lightcoral',
        }}
      />
    </SafeAreaView>
  );
};
