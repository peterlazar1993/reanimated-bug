import React from 'react';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Home = ({navigation}) => {
  const onPress = route => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          rowGap: 16,
          padding: 16,
          justifyContent: 'center',
          flexGrow: 1,
        }}>
        <ListItem
          onPress={() => {
            onPress('Smooth Scroll');
          }}
          title="Smooth Scroll Bug"
        />
        <ListItem
          onPress={() => {
            onPress('Animted Keyboard');
          }}
          title="useAnimatedKeyboard Bug"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const ListItem = ({onPress, title}) => {
  return (
    <RectButton
      rippleColor={'lightpink'}
      underlayColor="lightpink"
      activeOpacity={0.4}
      onPress={onPress}
      style={{
        width: '100%',
        borderRadius: 10,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderBottomWidth: 4,
          borderColor: 'lightcoral',
          borderRadius: 10,
          paddingVertical: 16,
        }}>
        <Text style={{fontSize: 16, color: 'white'}}>{title}</Text>
      </View>
    </RectButton>
  );
};
