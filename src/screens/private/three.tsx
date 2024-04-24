import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ButtonSend } from '~/components/buttons/buttonSend';
import { Header } from '~/components/headers';
import { InputForm } from '~/components/input';

export default function TabTwoScreen() {
  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <Header title="Perfil" />
      {/* fim do header */}

      <View style={{ alignItems: 'center', justifyContent: 'center', gap: 8, marginVertical: 32 }}>
        <Image
          source={{
            uri: 'https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg',
          }}
          style={{ width: 148, height: 148, borderRadius: 148 }}
        />
        <TouchableOpacity>
          <Text
            style={{
              color: '#00B37E',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Alterar foto
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginHorizontal: 16 }}>
        <InputForm placeholder="Guilherme Diniz" />
        <InputForm placeholder="guilherme.diniz@gmail.com" />
      </View>

      <View style={{ marginHorizontal: 16, gap: 8, marginTop: 32 }}>
        <Text style={{ color: '#C4C4CC', fontSize: 16, fontWeight: 'bold' }}>Alterar senha</Text>
        <InputForm placeholder="Senha antiga" />
        <InputForm placeholder="Nova senha" />
        <ButtonSend textButton="Atualizar" />
      </View>
    </View>
  );
}
