import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import AppCard from '../../components/AppCard';
import AppScreen from '../../components/AppScreen';
import { CardData, cardData } from '../../utils/cardData';
import { FlatList } from 'react-native-gesture-handler';

const ProductFeedScreen = () => {
  return (
    <AppScreen className="flex-1 bg-light justify-center">
      <FlatList<CardData>
        data={cardData}
        renderItem={({ item }) => <AppCard {...item} />}
        initialNumToRender={3}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </AppScreen>
  );
};

export default ProductFeedScreen;
