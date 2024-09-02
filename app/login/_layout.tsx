import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function LoginLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{}}
      />
    </Stack>
  );
}
