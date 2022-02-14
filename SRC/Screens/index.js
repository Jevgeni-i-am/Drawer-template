import { HomeScreen } from "./Home/HomeScreen";
import { HomeDetailsScreen } from "./Home/HomeDetails";

import { NotificationsScreen } from "./Notifications/NotificationScreen";
import { NotificationsDetailsScreen } from "./Notifications/NotificationDetails";

import { PicturesScreen } from "./Pictures/PicturesScreen";
import { PicturesDetailsScreen } from "./Pictures/PicturesDetails";

import { AboutScreen } from "./About/AboutApp";



/* SCREEN REGISTRATION FILE */

/* Home page stack */
export function Home() { return (<HomeScreen />) }
export function HomeDetails() { return (<HomeDetailsScreen />) }

/* Notification page stack */
export function Notifications() { return (<NotificationsScreen />) }
export function NotificationsDetails() { return (<NotificationsDetailsScreen />) }

/* Pictures page stack */
export function Pictures() { return (<PicturesScreen />) }
export function PicturesDetails() { return (<PicturesDetailsScreen />) }


/* ABOUT */
export function About() { return (<AboutScreen />) }
