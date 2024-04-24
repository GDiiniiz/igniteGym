import { Text, View } from 'react-native';

interface headerProps {
  title?: string;
}

export function Header({ title }: headerProps) {
  return (
    <View
      style={{
        backgroundColor: '#202024',
        paddingTop: 80,
        paddingVertical: 40,
        paddingHorizontal: 16,
        alignItems: 'center',
      }}>
      <Text style={{ color: '#E1E1E6', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
}
