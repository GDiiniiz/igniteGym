import { FlatList, Text, View } from 'react-native';
import { Header } from '~/components/headers';

export default function TabTwoScreen() {
  const exerciseHistory = [
    {
      id: '1',
      name: 'Costas',
      exercise: 'Puxada frontal',
      time: '08:56',
    },
    {
      id: '2',
      name: 'Costas',
      exercise: 'Remada unilateral',
      time: '08:32',
    },
  ];

  const exerciseHistory2 = [
    {
      id: '1',
      name: 'Costas',
      exercise: 'Puxada frontal',
      time: '11:24',
    },
  ];

  const renderItemExerciseHistoty = ({ item }: any) => (
    <View
      style={{
        backgroundColor: '#202024',
        paddingHorizontal: 16,
        height: 87,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        marginBottom: 16,
      }}>
      <View style={{ gap: 8 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>{item?.name}</Text>
        <Text style={{ color: '#E1E1E6', fontSize: 16 }}>{item?.exercise}</Text>
      </View>
      <View>
        <Text style={{ color: '#7C7C8A' }}>{item?.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <Header title="Histórico de Exercícios" />
      {/* fim do header */}

      <View style={{ gap: 4, marginTop: 32 }}>
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ color: '#C4C4CC', fontWeight: 'bold', fontSize: 16 }}>26.08.22</Text>
        </View>

        <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
          <FlatList
            data={exerciseHistory}
            renderItem={renderItemExerciseHistoty}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>

      <View style={{ gap: 4, marginTop: 32 }}>
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ color: '#C4C4CC', fontWeight: 'bold', fontSize: 16 }}>26.08.22</Text>
        </View>

        <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
          <FlatList
            data={exerciseHistory2}
            renderItem={renderItemExerciseHistoty}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}
