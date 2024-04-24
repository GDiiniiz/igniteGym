import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Button } from '~/components/buttons';
import { ButtonSend } from '~/components/buttons/buttonSend';
import { InputForm } from '~/components/input';
import { useAuthContext } from '~/contexts/auth-context';

interface SignInProps {
  goTohome?: () => void;
}

export default function SignIn({ goTohome }: SignInProps) {
  const navigation = useNavigation();
  const { setSignIn } = useAuthContext();

  const goToScreenCreatedAccount = () => {
    navigation.navigate('CreatedAccount');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Imagem de fundo */}
      <Image
        source={require('../../../components/images/img1.png')}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          position: 'absolute',
        }}
      />
      {/* Máscara semi-transparente */}

      {/* <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      /> */}

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
          }}>
          <Image
            source={require('../../../components/images/img2.png')}
            style={{
              width: 38,
              height: 38,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              fontWeight: 'bold',
            }}>
            Ignite Gym
          </Text>
        </View>
        <Text
          style={{
            color: '#E1E1E6',
            fontSize: 14,
          }}>
          Treine sua mente e o seu corpo
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginTop: 204,
          paddingHorizontal: 16,
        }}>
        <Text
          style={{
            color: '#E1E1E6',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 16,
          }}>
          Acesse sua conta
        </Text>
        <InputForm placeholder="E-mail" />
        <InputForm placeholder="Senha" />
        <ButtonSend textButton="Acessar" Send={() => setSignIn(true)} />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 26,
          gap: 4,
        }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 16, color: '#E1E1E6' }}>Ainda não tem acesso?</Text>
        </TouchableOpacity>
        <Button textButton="Criar Conta" onPress={goToScreenCreatedAccount} />
      </View>
    </View>
  );
}
