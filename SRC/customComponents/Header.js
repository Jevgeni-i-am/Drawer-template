import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";


const CustomHeader = () => (

      <View style={styles.header}>
            <View style={styles.left}>
                  <Image
                        style={styles.image}
                        source={require('../../assets/favicon.png')} />
            </View>
            <View style={styles.center}>
                  <Image
                        style={styles.image}
                        source={require('../../assets/favicon.png')} />

            </View>

            <View style={styles.right}>
                  <Image
                        style={styles.image}
                        source={require('../../assets/favicon.png')} />
            </View>
      </View >



)


const styles = StyleSheet.create({
      container: {
            flex: 1,

      },
      header: {
            flexDirection: 'row',
            padding: 20,
            justifyContent: "center",
            alignItems: "center"
      },

      left: {
            flex: 1,
            backgroundColor: '#f4511e',

      },
      center: {
            flex: 1,
            backgroundColor: '#f4511e',

      },
      right: {
            flex: 1,
            backgroundColor: '#f4511e',

      },

      image: {
            width: 60,
            height: 60,
            justifyContent: "center",
            backgroundColor: '#f4511e'


      },
      text: {
            textAlign: "center",
            color: "white",
            fontSize: 25,
      }
})


export default CustomHeader;