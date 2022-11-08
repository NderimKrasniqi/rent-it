import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import AppCard from '../../components/AppCard';
import AppScreen from '../../components/AppScreen';
import { CardData, cardData } from '../../utils/cardData';
import { FeedStackProps } from '../../navigation/navigation.types';

const ProductFeedScreen = ({ navigation }: FeedStackProps<'ProductFeedScreen'>) => {
  return (
    <AppScreen className="flex-1 bg-light justify-center px-5">
      <FlatList<CardData>
        data={cardData}
        renderItem={({ item }) => (
          <AppCard {...item} onPress={() => navigation.navigate('ProductDetailScreen', { item })} />
        )}
        initialNumToRender={3}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </AppScreen>
  );
};

export default ProductFeedScreen;
