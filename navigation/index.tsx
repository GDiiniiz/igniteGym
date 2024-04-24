import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth';

import { useAuthContext } from '~/contexts/auth-context';

export default function RootStack() {
  const { signIn } = useAuthContext();

  return <NavigationContainer>{signIn ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>;
}
