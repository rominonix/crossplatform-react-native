import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";


const image = require('../assets/splash.png')

const SplashScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',

  },
});

export default SplashScreen;