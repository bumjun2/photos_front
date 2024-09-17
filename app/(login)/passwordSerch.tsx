import { Stack, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';

export default function PassWordSerchScreen() {
  const param = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Forget Password',
          headerBackTitle: '로그인',
        }}
      />
    </SafeAreaView>
  );
}
