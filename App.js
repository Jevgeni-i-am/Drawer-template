import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './SRC/NAV/DrawerNavigator';






export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}