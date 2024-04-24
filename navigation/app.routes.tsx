import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';

import InfoExercise from '../src/screens/private/infoExercise';
import One from '../src/screens/private/one';
import Three from '../src/screens/private/three';
import Two from '../src/screens/private/two';

const { Screen: TabScreen, Navigator: TabNavigator } = createBottomTabNavigator();
const { Screen: StackScreen, Navigator: StackNavigator } = createStackNavigator();

const TabIcon: React.FC<{ name: string }> = ({ name }) => {
  return <Ionicons name={name as any} size={32} color="#00B37E" />;
};

export function AppRoutes() {
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
        component={One}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => <TabIcon name="home-outline" />,
          tabBarLabel: () => null,
        }}
      />

      <TabScreen
        name="History"
        component={Two}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => <TabIcon name="sync-circle-outline" />,
          tabBarLabel: () => null,
        }}
      />

      <TabScreen
        name="Account"
        component={Three}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => <TabIcon name="person-circle-outline" />,
          tabBarLabel: () => null,
        }}
      />

      <TabScreen
        name="InformationScreen"
        component={StackNavigatorComponent}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarVisible: false,
        }}
      />
    </TabNavigator>
  );
}

function StackNavigatorComponent() {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    const params = { ...route.params };
    delete params.route;
    navigation.navigate(route.params.route, params);
  }, [route?.params]);

  return (
    <StackNavigator>
      <StackScreen name="Informations" component={InfoExercise} options={{ headerShown: false }} />
    </StackNavigator>
  );
}
