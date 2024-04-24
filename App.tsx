import 'react-native-gesture-handler';
import './global.css';

import RootStack from './navigation';

import { AuthProvider } from '~/contexts/auth-context';

export default function App() {
  return (
    <AuthProvider>
      <RootStack />
    </AuthProvider>
  );
}
