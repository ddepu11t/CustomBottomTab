import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import TarnsactionsScreen from "../screens/TransactionsScreen";
import StaticsScreen from "../screens/StaticsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="TarnsactionsScreen" component={TarnsactionsScreen} />
      <Tab.Screen name="StaticsScreen" component={StaticsScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({ tabBar: {} });

export default TabsNavigator;
