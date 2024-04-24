import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '.';
import One from '../src/screens/one';
import Two from '../src/screens/two';

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="One"
        component={One}
        options={({ navigation }) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <Ionicons name="code" size={24} color={color} />,
          headerRight: () => (
            <Ionicons
              name="reorder-three-outline"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate('Modal')}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Two"
        component={Two}
        options={({ navigation }) => ({
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Ionicons name="code" size={24} color={color} />,
          headerRight: () => (
            <Ionicons
              name="reorder-three-outline"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate('Modal')}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
