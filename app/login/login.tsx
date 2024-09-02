import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Login() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View>
      <Text>아아아아</Text>
    </View>
  );
}
