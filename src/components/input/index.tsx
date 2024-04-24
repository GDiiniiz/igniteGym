import { Controller, useForm } from 'react-hook-form';
import { TextInput, View } from 'react-native';

interface inputFormProps {
  placeholder?: string;
  nameForm?: string;
}

export function InputForm({ placeholder, nameForm }: inputFormProps) {
  const { control, handleSubmit } = useForm();
  return (
    <View style={{ marginBottom: 16 }}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7C7C8A"
            style={{
              backgroundColor: '#121214',
              height: 55,
              paddingHorizontal: 16,
              borderRadius: 6,
              color: '#7C7C8A',
            }}
          />
        )}
        name={nameForm ?? 'defaultName'}
        rules={{ required: 'Este campo é obrigatório' }}
        defaultValue=""
      />
    </View>
  );
}
