import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Mailer from 'react-native-mail';

export default function newUserScreen() {
  // 입력값 확인
  const [account, setAccount] = useState([false, false, false, false]);

  // Username 값
  const [username, setUsername] = useState('');
  const [usernameState, setUsernameState] = useState('');

  //password 값
  const [password, setPassword] = useState('');
  const [passwordState, setPasswordState] = useState('');

  //password Retry 값
  const [passwordRetry, setPasswordRetry] = useState('');
  const [passwordRetryState, setPasswordRetryState] = useState('');

  // 인증번호 발송 클릭시 input창 띄우기
  const [flag, setFlag] = useState(false);

  // email 값
  const [email, setEmail] = useState('');
  const [emailCodeState, setEmailCodeState] = useState('');

  // 인증 값
  const [authcode, setAuthCode] = useState(''); // 입력한 코드값
  const [code, setCode] = useState(''); // 이메일로 보낼 핸덤한 코드값

  // 로딩화면
  const [lodding, setLodding] = useState(false);

  // 아이디 값을 입력할 때 값
  useEffect(() => {
    const id = 'jbj3713'; // 임시 아이디 값

    // 아이디 중복값일때
    account[0] = false;
    setAccount([...account]);

    if (username == '') {
      // 아이디 값 빈 상태 일때 !!
      setUsernameState('');
    }

    if (username === id) {
      setUsernameState('사용 불가한 아이디 입니다.');
    } else if (username != '') {
      // 아이디 값을 입력했을때 !!
      setUsernameState('사용가능한 아이디입니다.');
      // 아이디 입력값 맞을때
      trueIndex(0);
    }
  }, [username]); // 아이디 값 확인 끝

  // 비밀번호 값을 입력할때 값
  useEffect(() => {
    // 정규식 코드
    const passwordCk = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    account[1] = false;
    setAccount([...account]);

    if (password == '') {
      // 비밀번호를 입력하지 않을때
      setPasswordState('');
    } else if (!passwordCk.test(password)) {
      // 비밀번호 정규식에 걸렸을때
      setPasswordState(
        '영문자, 특수문자, 숫자 를 포함해서 8자리 이상을 입력해주세요'
      );
    } else {
      // 비밀번호를 잘 입력했을때 !!
      setPasswordState('사용 가능한 비밀번호 입니다.');
      trueIndex(1);
    }
  }, [password]); // 비밀번호값 확인 끝

  // 비밀번호 재입력 값 확인
  useEffect(() => {
    account[2] = false;
    setAccount([...account]);
    if (passwordRetry == '') {
      // 입력하지 않을때
      setPasswordRetryState('');
    } else if (password !== passwordRetry) {
      // 값이 안 맞을때
      setPasswordRetryState('비밀번호가 일치하지 않습니다.');
    } else {
      // 비밀번호 재입력시 값이 일정할때
      setPasswordRetryState('비밀번호가 일치합니다.');
      trueIndex(2);
    }
  }, [passwordRetry]);

  // 이메일 발송
  const sendEmail = () => {
    setLodding(true);
    // 랜덤한 코드값 생성
    const code = generateAuthCode();

    setCode(code);

    const param = {
      to: email, // 이메일 주소
      subject: 'MY LIFE IS 비밀번호 인증코드', // 이메일 발송 제목
      setText: code, // 이메일 발송내용
    };

    fetch('http://localhost:8183/login/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    }).then((response) => {
      if (response.ok) {
        // 이메일에 맞게 잘 전송 될 경우
        setFlag(true);

        new Promise((resolve) => setTimeout(resolve, 7000))
          .then(() => {
            Alert.alert('이메일이 발송되었습니다.');
          })
          .finally(() => {
            setLodding(false);
          });

        return response.json;
      } else {
        // 그렇지 않을경우
        Alert.alert('이메일을 다시 확인해 주세요');
        setLodding(false);
      }
    });
  };

  useEffect(() => {
    account[3] = false;
    setAccount([...account]);
    if (authcode == '') {
      setEmailCodeState('');
    } else if (code != authcode) {
      setEmailCodeState('인증코드를 다시 확인해 주세요.');
    } else {
      setEmailCodeState('인증코드가 일치합니다.');
      trueIndex(3);
    }
  }, [authcode]);

  // input 값 확인
  const trueIndex = (index) => {
    account[index] = true;
    setAccount([...account]);
  };

  // 랜덤한 이메일 인증 코드값
  const generateAuthCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let authCode = '';

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      authCode += characters[randomIndex];
    }

    return authCode;
  };

  // 모든 상태가 true인지 확인
  const allValid = account.every((status) => status === true);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: '회원가입',
          headerBackTitle: '로그인',
        }}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="아이디"
          placeholderTextColor="#888"
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.status}>
        <Text style={account[0] ? styles.true : styles.false}>
          {usernameState}
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          placeholderTextColor="#888"
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.status}>
        <Text style={account[1] ? styles.true : styles.false}>
          {passwordState}
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 재입력"
          placeholderTextColor="#888"
          secureTextEntry
          onChangeText={setPasswordRetry}
        />
      </View>
      <View style={styles.status}>
        <Text style={account[2] ? styles.true : styles.false}>
          {passwordRetryState}
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="이메일"
          placeholderTextColor="#888"
          onChangeText={setEmail}
        />
      </View>
      {lodding ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
          <Text>이메일 전송 중...</Text>
        </View>
      ) : flag ? (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="인증번호"
            placeholderTextColor="#888"
            onChangeText={setAuthCode}
          />
        </View>
      ) : (
        <TouchableOpacity
          style={styles.authNumberSend}
          onPress={sendEmail}
        >
          <Text>인증번호 발송</Text>
        </TouchableOpacity>
      )}

      <View style={styles.status}>
        <Text style={account[3] ? styles.true : styles.false}>
          {emailCodeState}
        </Text>
      </View>
      {allValid && (
        <TouchableOpacity style={styles.signupButton}>
          <Text>회원가입</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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
  authNumberSend: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  status: {
    marginLeft: 20,
  },

  true: {
    color: '#007bff',
  },
  false: {
    color: 'red',
  },
  loadingContainer: {
    alignItems: 'center',
  },

  signupButton: {
    margin: 15,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
