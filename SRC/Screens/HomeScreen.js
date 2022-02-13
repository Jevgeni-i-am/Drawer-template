import * as React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {
      const navigation = useNavigation();

      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Button
                        onPress={() => navigation.navigate('Notifications')}
                        title="Go to notifications"
                  />
            </View>
      );
}

