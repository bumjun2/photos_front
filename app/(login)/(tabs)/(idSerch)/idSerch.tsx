import { Stack, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';

export default function idSerchScreen() {
  const param = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: true,
          title: '',
          headerBackTitle: '로그인',
        }}
      />
      <View></View>
    </SafeAreaView>
  );
}
