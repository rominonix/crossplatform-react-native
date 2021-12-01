import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";


const image = require('../assets/splash.png')

const SplashScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      {/* <Text style={styles.text}>Inside</Text> */}
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
    // resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',

  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default SplashScreen;