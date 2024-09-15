import { Link } from 'expo-router';
import { useEffect, useRef } from 'react';
import {
  Animated,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  // 타이틀 Login 애니메이션
  const rotatoValue = useRef(new Animated.Value(0)).current;

  // 타이틀 Login 애니메이션 적용
  useEffect(() => {
    const rotateAnimation = Animated.timing(rotatoValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    });

    rotateAnimation.start();
  }, [rotatoValue]);

  const rotateInterpolate = rotatoValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Animated.Text
          style={[styles.title, { transform: [{ rotate: rotateInterpolate }] }]}
        >
          Login
        </Animated.Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
      </View>
      <Link
        href={{
          pathname: '/passwordSerch',
          params: {
            name: '로그인',
          },
        }}
        style={styles.passwordContainer}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </Link>
      <TouchableOpacity
        activeOpacity={0.8} // 반짝이는 정도
        style={styles.button}
      >
        <Text> Login </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    margin: 10,
  },
  input: {
    height: 30,
    marginBottom: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  passwordContainer: {
    width: '100%',
    marginLeft: 15,
  },

  forgotPasswordText: {
    color: '#007bff',
    fontSize: 10,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
