import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import { AboutScreen } from '../Screens/About/AboutApp';




const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
      return (

            <Drawer.Navigator
                  initialRouteName="HomeTab"
                  screenOptions={{ headerShown: false }}

            >
                  <Drawer.Screen name="HomeTab" component={BottomTabNavigator} />
                  <Drawer.Screen name="About" component={AboutScreen} />

            </Drawer.Navigator>

      );
}
