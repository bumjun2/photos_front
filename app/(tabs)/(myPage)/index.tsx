import { useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  PanResponder,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function myPageScreen() {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={require('../../../assets/images/profile.jpeg')}
        style={styles.image}
        resizeMode="cover"
      >
        <Text style={styles.imageText}>Bumjun2</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
  },
  imageText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#fff',
  },
});
