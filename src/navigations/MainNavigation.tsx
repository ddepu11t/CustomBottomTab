import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./TabsNavigator";
import { TabContextProvider } from "../context/TabContext";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <TabContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Root"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Root" component={TabsNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </TabContextProvider>
  );
};

export default MainNavigation;
