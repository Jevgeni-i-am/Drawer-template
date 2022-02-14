import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


const CustomButton = ({ onPress, title }) => (
      <TouchableOpacity
            onPress={onPress}
            style={styles.appButtonContainer}
            activeOpacity={0.8}
      >
            <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
);



const styles = StyleSheet.create({
      appButtonContainer: {
            elevation: 8,
            backgroundColor: "#009688",
            borderRadius: 10,
            paddingVertical: 8,
            paddingHorizontal: 12,
            marginBottom: 5
      },
      appButtonText: {
            fontSize: 18,
            color: "#fff",
            fontWeight: "bold",
            alignSelf: "center",
            textTransform: "uppercase"
      }
});

export default CustomButton;