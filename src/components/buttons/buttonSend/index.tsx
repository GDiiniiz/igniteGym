import { Text, TouchableOpacity, View } from 'react-native';

interface buttonSendProps {
  textButton?: string;
  Send?: () => void;
}

export function ButtonSend({ textButton, Send }: buttonSendProps) {
  return (
    <View>
      <TouchableOpacity
        onPress={Send}
        style={{
          borderWidth: 1,
          borderColor: '#00875F',
          borderRadius: 6,
          backgroundColor: '#00875F',
          width: '100%',
          height: 50,
          paddingVertical: 8,
          paddingHorizontal: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#f4f4f4',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {textButton}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
