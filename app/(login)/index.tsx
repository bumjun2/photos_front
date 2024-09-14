import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text> Log In </Text>
      </View>
      <View>
        <TextInput placeholder="아이디" />
        <TextInput placeholder="비밀번호" />
      </View>
    </View>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginTextContainer: {},
});
