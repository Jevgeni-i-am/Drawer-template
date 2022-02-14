import React from "react";
import {
      Home, HomeDetails,
      Notifications, NotificationsDetails,
      Pictures, PicturesDetails
} from "../Screens";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from "../customComponents/header";

const Stack = createNativeStackNavigator();
const screenOptionStyle = {


      headerTintColor: "white",
      headerBackTitle: "Back",
      fontWeight: 'bold',
      header: (props) => (<CustomHeader {...props} />),
      headerLeft: () => null,
}




const HomeStackNavigator = () => {
      return (
            <Stack.Navigator screenOptions={screenOptionStyle}  >
                  <Stack.Screen name="HomeStack" component={Home} />
                  <Stack.Screen name="HomeDetailsPage" component={HomeDetails} />
            </Stack.Navigator>)
}

const NotificationStackNavigator = () => {
      return (
            <Stack.Navigator screenOptions={screenOptionStyle}>
                  <Stack.Screen name="NotificationStack" component={Notifications} />
                  <Stack.Screen name="NotificationDetailsPage" component={NotificationsDetails} />
            </Stack.Navigator>);
}

const PicturesStackNavigator = () => {
      return (
            <Stack.Navigator screenOptions={screenOptionStyle}>
                  <Stack.Screen name="PicturesStack" component={Pictures} />
                  <Stack.Screen name="PicturesDetailsPage" component={PicturesDetails} />
            </Stack.Navigator>);
}



export { HomeStackNavigator, NotificationStackNavigator, PicturesStackNavigator };