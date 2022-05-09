import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Alugue uma Bicicleta" component={RideScreen} />
            <Tab.Screen name="Histórico de Locações" component={RideHistoryScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
