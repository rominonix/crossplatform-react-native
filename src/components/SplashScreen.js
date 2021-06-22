import React from 'react';
import { ImageBackground, View } from 'react-native';
import styles from '../styles/index';

const image = require('../assets/splash.png')

const SplashScreen = () => (
  <View style={styles.splashContainer}>
    <ImageBackground source={image} style={styles.splashImg}>
    </ImageBackground>
  </View>
);

export default SplashScreen;