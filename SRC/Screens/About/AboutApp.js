import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../customComponents/Button';
import { StyleSheet } from "react-native";
import { ScreenContainer } from '../../customComponents/ScreenContainer';




export function AboutScreen() {
      const navigation = useNavigation();

      return (
            <ScreenContainer>

                  <Text>HERE IS INFO ABOUT APP</Text>

                  <CustomButton
                        onPress={() => navigation.navigate('HomeTab')}
                        title="Go to home screen"
                  />

            </ScreenContainer>
      );
}


const styles = StyleSheet.create({
      container: {
            flex: 1, alignItems: 'center', justifyContent: 'center'
      }
})