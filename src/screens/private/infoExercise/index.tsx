import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';

import { ButtonSend } from '~/components/buttons/buttonSend';
import { HeaderInfo } from '~/components/headers/infomations';

export default function InfoExerciseTab() {
  const route = useRoute();
  const navigation = useNavigation();

  const { exercise } = route?.params || {};

  console.log(route);

  function backPage() {
    navigation.goBack();
  }

  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <HeaderInfo title={exercise?.name} muscle="Costas" back={() => backPage()} />
      {/* fim do header */}

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
        <Image
          source={{
            uri: exercise?.url,
          }}
          style={{ width: 364, height: 364, borderRadius: 6 }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#202024',
          width: 364,
          height: 145,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 32,
          marginTop: 32,
          borderRadius: 8,
          gap: 16,
        }}>
        <Text style={{ color: '#C4C4CC', fontSize: 16 }}>{exercise?.series}</Text>
        <ButtonSend textButton="Marcar como realizado" />
      </View>
    </View>
  );
}
