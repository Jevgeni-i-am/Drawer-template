import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../customComponents/Button';
import { ScreenContainer } from 'react-native-screens';



export function HomeDetailsScreen() {
      const navigation = useNavigation();

      return (
            <ScreenContainer>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        <CustomButton
                              onPress={() => navigation.navigate('HomeStack')}
                              title="Go to HomeStack top page"
                        />

                        <Text>HOME DETAILS SCREEN</Text>
                        <CustomButton
                              onPress={() => navigation.navigate('HomeStack')}
                              title="Go to HomeStack top page"
                        />
                        <CustomButton
                              onPress={() => navigation.navigate('HomeStack')}
                              title="Go to HomeStack top page"
                        />
                  </View>
            </ScreenContainer >
      );
}


