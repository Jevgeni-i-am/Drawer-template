import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";



export const Bg_X_image = (require('../../assets/bg/background.jpg'));
export const Bg_X_image2021 = (require('../../assets/bg/background.jpg'))

export const ScreenContainer = ({ children }) => (

      <View style={styles.container}>
            <ImageBackground
                  style={styles.image}
                  source={Bg_X_image2021}
                  resizeMode="cover"
                  opacity={0.3}>
                  {children}
            </ImageBackground>
      </View>
);


const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
      },
      image: {
            width: "100%",
            height: "100%"
      }
})