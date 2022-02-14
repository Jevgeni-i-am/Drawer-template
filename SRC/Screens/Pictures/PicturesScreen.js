import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../customComponents/Button';


export function PicturesScreen() {
      const navigation = useNavigation();
      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text>Pictures will be shown here </Text>
                  <CustomButton onPress={() => navigation.navigate('HomeTab')} title="Go back to  home tab" />
                  <CustomButton onPress={() => navigation.navigate('NotificationTab')} title="Go back to  Notification tab" />
                  <CustomButton onPress={() => navigation.navigate('PicturesDetailsPage')} title="Go PicturesDetailsScreen " />
            </View>
      );
}