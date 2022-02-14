import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../customComponents/Button';


export function NotificationsDetailsScreen() {
      const navigation = useNavigation();
      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text>NOTIFICATION DETAILS SCREEN</Text>
                  <CustomButton onPress={() => navigation.goBack()} title="Go back home" />
                  <CustomButton onPress={() => navigation.navigate('PicturesTab')} title="Go to pictures tab" />

                  <CustomButton
                        onPress={() => navigation.navigate('NotificationStack')}
                        title="Go to NOTIFICATION STACK top page"
                  />


            </View>
      );
}