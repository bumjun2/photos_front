import { Link } from 'expo-router';
import { useEffect, useRef } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  Animated,
  Button,
  Image,
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
      <View style={styles.cornerFold} />
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
        <Text style={styles.forgotPasswordText}>
          비밀번호를 잊어버리셨나요?
        </Text>
      </Link>
      <TouchableOpacity
        activeOpacity={0.8} // 반짝이는 정도
        style={styles.button}
      >
        <Text style={styles.buttonText}> Login </Text>
      </TouchableOpacity>

      <View style={styles.iconeContainer}>
        <Image
          source={require('../../assets/images/kakao.png')}
          style={styles.icon}
        />
        <AntDesign
          name="google"
          size={24}
          style={styles.icon}
        />
      </View>
      <View style={styles.newUser}>
        <Text>계정이 없으신가요?</Text>
        <Link
          href={{
            pathname: '/newUser',
          }}
          style={styles.newUserText}
        >
          가입하기
        </Link>
      </View>
      <View style={styles.bottomEnd}>
        <Text style={styles.bottomText}>MY LIFE IS ...</Text>
      </View>
    </SafeAreaView>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#000',
    borderTopRightRadius: 50,
    padding: 20,
    position: 'relative',
  },

  cornerFold: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    backgroundColor: '#f5f5f5', // 배경과 동일한 색상
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderBottomColor: '#ddd', // 접힌 부분의 테두리 색상
    borderRightColor: '#ddd', // 접힌 부분의 테두리 색상
    borderTopRightRadius: 10, // 원래 이미지의 borderRadius와 일치
    transform: [
      { rotate: '45deg' }, // 모서리를 45도 회전
    ],
  },
  bottomEnd: {
    position: 'absolute',
    height: 50,
    width: '100%',
    backgroundColor: '#000',
    bottom: 0,
  },
  bottomText: {
    color: '#fff',
    marginTop: 10,
    left: 10,
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
    margin: 20,
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  iconeContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    width: 24,
    height: 24,
  },
  newUser: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  newUserText: {
    color: '#007bff',
    marginLeft: 5,
  },
});
