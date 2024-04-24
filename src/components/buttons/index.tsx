import { Text, TouchableOpacity, View } from 'react-native';

interface buttonProps {
  textButton?: string;
  onPress?: () => void;
}

export function Button({ textButton, onPress }: buttonProps) {
  return (
    <View style={{ marginHorizontal: 16 }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          borderWidth: 1,
          borderColor: '#00B37E',
          borderRadius: 6,
          backgroundColor: '#000',
          width: 350,
          height: 50,
          paddingVertical: 8,
          paddingHorizontal: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#00B37E',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {textButton}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
