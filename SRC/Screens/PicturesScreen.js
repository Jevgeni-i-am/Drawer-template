import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function PicturesScreen() {
      const navigation = useNavigation();
      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text>Pictures will be shown here </Text>
                  <Button onPress={() => navigation.navigate('Home')} title="Go back home" />
            </View>
      );
}