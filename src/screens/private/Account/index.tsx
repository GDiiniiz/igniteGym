import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import TabThreeScreen from './three';

const { Navigator, Screen } = createStackNavigator();

export function Account() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Account">
      <Screen name="Account" component={TabThreeScreen} />
    </Navigator>
  );
}
