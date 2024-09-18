import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SerchScreen() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="passwordSerch" />
    </Stack>
  );
}
