import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import AppCard from '../../components/AppCard';
import AppScreen from '../../components/AppScreen';
import { cardData } from '../../utils/cardData';

const ProductFeedScreen = () => {
  return (
    <AppScreen className="flex-1 bg-light justify-center">
      <FlatList
        data={cardData}
        keyExtractor={(product) => product.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            price={`${item.price} €`}
            image={item.image}
            city={item.city}
          />
        )}
      />
      <StatusBar style="auto" />
    </AppScreen>
  );
};

export default ProductFeedScreen;
