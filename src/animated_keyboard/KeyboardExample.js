import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native';
import {useAnimatedKeyboard} from 'react-native-reanimated';

export const KeyboardExample = () => {
  const {state} = useAnimatedKeyboard({isStatusBarTranslucentAndroid: true});

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
