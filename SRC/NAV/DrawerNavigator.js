import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Notifications, Pictures } from '../Screens';




const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
      return (

            <Drawer.Navigator initialRouteName="Home">
                  <Drawer.Screen name="Home" component={Home} />
                  <Drawer.Screen name="Notifications" component={Notifications} />
                  <Drawer.Screen name="Pictures" component={Pictures} />
            </Drawer.Navigator>

      );
}