import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface headerProps {
  title?: string;
  back?: () => void;
  muscle?: string;
}

export function HeaderInfo({ title, back, muscle }: headerProps) {
  return (
    <View
      style={{
        backgroundColor: '#202024',
        paddingTop: 50,
        paddingVertical: 40,
        paddingHorizontal: 16,
      }}>
      <TouchableOpacity onPress={back}>
        <Ionicons name="arrow-back-outline" size={27} color="#00B37E" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{ color: '#E1E1E6', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ color: '#C4C4CC', fontSize: 16 }}>{muscle}</Text>
      </View>
    </View>
  );
}
