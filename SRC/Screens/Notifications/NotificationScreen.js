import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../customComponents/Button';


export function NotificationsScreen() {
      const navigation = useNavigation();
      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <CustomButton onPress={() => navigation.goBack()} title="Go back home" />
                  <CustomButton onPress={() => navigation.navigate('PicturesTab')} title="Go to pictures tab" />

                  <Text>NotificationDetailsPage</Text>
                  <CustomButton
                        onPress={() => navigation.navigate('NotificationDetailsPage')}
                        title="Go to NotificationDetailsPage"
                  />
            </View>
      );
}