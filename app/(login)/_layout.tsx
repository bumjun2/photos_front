import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
