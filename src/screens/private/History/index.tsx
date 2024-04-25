import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import TabTwoScreen from './two';

const { Navigator, Screen } = createStackNavigator();

export function HistoryExercise({ route, navigation }: any) {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="History">
      <Screen name="History" component={TabTwoScreen} />
    </Navigator>
  );
}
