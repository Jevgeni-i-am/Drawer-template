import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../customComponents/Button';
import { ScreenContainer } from '../../customComponents/ScreenContainer';




export function HomeScreen() {
      const navigation = useNavigation();

      return (
            <ScreenContainer>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


                        <CustomButton
                              onPress={() => navigation.navigate('NotificationTab')}
                              title="Go to notifications"
                        />
                        <CustomButton
                              onPress={() => navigation.navigate('PicturesTab')}
                              title="Go to Pictures"
                        />
                        <Text>------------</Text>
                        {/*   <CustomButton
                              onPress={() => navigation.navigate('HomeDetailsPage')}
                              title="Go to HomeDetails"
                        /> */}
                  </View>
            </ScreenContainer>
      );
}

