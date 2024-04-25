import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { useAuthContext } from '~/contexts/auth-context';

interface HomeProps {
  backToSignIn?: () => void;
}

export default function TabOneScreen({ backToSignIn }: HomeProps) {
  const navigation = useNavigation();
  const { setSignIn } = useAuthContext();

  const muscle = [
    {
      id: '1',
      name: 'Costas',
    },
    {
      id: '2',
      name: 'Biceps',
    },
    {
      id: '3',
      name: 'Triceps',
    },
    {
      id: '4',
      name: 'Ombro',
    },
  ];

  const exerciseInformation = [
    {
      id: '1',
      name: 'Puxada frontal',
      series: '3 séries x 12 repetições',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gcQ7ksuOP52IGREtf6FFgxPefC6I5ltjl8XE65VjbA&s',
    },
    {
      id: '2',
      name: 'Remada curvada',
      series: '3 séries x 12 repetições',
      url: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/05/1301740817-remada-curvada.jpg',
    },
    {
      id: '3',
      name: 'Remada unilateral',
      series: '3 séries x 12 repetições',
      url: 'https://www.origym.com.br/produtos/maquina-remada-unilateral-origym-class-1.jpg',
    },
    {
      id: '4',
      name: 'Levantamento terra',
      series: '3 séries x 12 repetições',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvHatmk83FS3N7m2jWrTLnT2f72NDl3Ea1Rcc4RqHYQ&s',
    },
  ];

  const goToInfoExercise = (index: number) => {
    const exercise = exerciseInformation[index];
    navigation.navigate('Information', { exercise, route: 'Informations' });
  };

  const renderItemMuscle = ({ item }: any) => (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: item?.name === 'Costas' ? '#00B37E' : '#000',
        backgroundColor: '#202024',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
        marginBottom: 10,
        marginRight: 16,
      }}>
      <Text style={{ color: '#00B37E', textTransform: 'uppercase', fontWeight: 'bold' }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderItemExercise = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity
      onPress={() => {
        goToInfoExercise(index);
      }}
      style={{
        backgroundColor: '#29292E',
        padding: 8,
        borderRadius: 8,
        marginBottom: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}>
          <Image source={{ uri: item.url }} style={{ width: 67, height: 67, borderRadius: 6 }} />
          <View>
            <Text style={{ color: '#C4C4CC', fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
            <Text style={{ color: '#C4C4CC', fontSize: 16 }}>{item.series}</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#C4C4CC" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <View
        style={{
          backgroundColor: '#202024',
          paddingTop: 51,
          paddingBottom: 16,
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <Image
              source={{
                uri: 'https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg',
              }}
              style={{ width: 64, height: 64, borderRadius: 64 }}
            />
            <View>
              <Text style={{ color: '#E1E1E6', fontSize: 16 }}>Olá,</Text>
              <Text style={{ color: '#E1E1E6', fontSize: 16, fontWeight: 'bold' }}>
                Guilherme Diniz
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => setSignIn(false)}>
              <Ionicons name="exit-outline" size={32} color="#C4C4CC" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* fim do header */}

      <View style={{ paddingLeft: 16, marginTop: 32 }}>
        <FlatList
          data={muscle}
          renderItem={renderItemMuscle}
          horizontal
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* Fim lista de musculos */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          marginTop: 16,
        }}>
        <Text style={{ color: '#C4C4CC', fontWeight: 'bold', fontSize: 16 }}>Exercícios</Text>
        <Text style={{ color: '#C4C4CC', fontSize: 16 }}>4</Text>
      </View>

      <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
        <FlatList
          data={exerciseInformation}
          renderItem={renderItemExercise}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* Fim dos exercicios */}
    </View>
  );
}
