import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="(idSerch)" />
      <Tabs.Screen name="(passwordSerch)" />
    </Tabs>
  );
}
