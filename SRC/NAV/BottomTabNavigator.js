
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
      HomeStackNavigator,
      PicturesStackNavigator,
      NotificationStackNavigator,
} from "./StackNavigator";







const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
      return (
            <Tab.Navigator initialRouteName="HomeTab" screenOptions={{ headerShown: false }}>
                  <Tab.Screen
                        name="HomeTab"
                        component={HomeStackNavigator}
                  />
                  <Tab.Screen name="NotificationTab"
                        component={NotificationStackNavigator}
                  />
                  <Tab.Screen
                        name="PicturesTab"
                        component={PicturesStackNavigator}
                  />


            </Tab.Navigator>
      );
};

export default BottomTabNavigator;