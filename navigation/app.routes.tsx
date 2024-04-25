import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import TabThreeScreen from '../src/screens/private/Account/three';
import HistoryExercise from '../src/screens/private/History/two';
import { Home } from '../src/screens/private/Home';

const { Screen: TabScreen, Navigator: TabNavigator } = createBottomTabNavigator();
const { Screen: StackScreen, Navigator: StackNavigator } = createStackNavigator();

const TabIcon: React.FC<{ name: string }> = ({ name }) => {
  return <Ionicons name={name as any} size={32} color="#00B37E" />;
};

export function AppRoutes() {
  const { Screen: TabScreen, Navigator: TabNavigator } = createBottomTabNavigator();

  return (
    <TabNavigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#00B37E',
        tabBarStyle: {
          justifyContent: 'center',
          backgroundColor: '#202024',
          borderTopWidth: 0,
          paddingTop: 2,
          elevation: 0,
        },
      }}>
      <TabScreen
        name="Home"
        component={Home}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => <TabIcon name="home-outline" />,
          tabBarLabel: () => null,
        }}
      />

      <TabScreen
        name="History"
        component={HistoryExercise}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => <TabIcon name="sync-circle-outline" />,
          tabBarLabel: () => null,
        }}
      />

      <TabScreen
        name="Account"
        component={TabThreeScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => <TabIcon name="person-circle-outline" />,
          tabBarLabel: () => null,
        }}
      />
    </TabNavigator>
  );
}
