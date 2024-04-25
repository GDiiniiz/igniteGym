import { useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';

import InfoExerciseTab from './infoExercise/';
import TabOneScreen from './one';

const { Navigator, Screen } = createStackNavigator();

export function Home() {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      const params = { ...route.params };
      delete params?.route;
      navigation.navigate(route?.params?.route, params);
    }
  }, [route?.params]);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Screen name="Home" component={TabOneScreen} />
      <Screen name="Information" component={InfoExerciseTab} />
    </Navigator>
  );
}
