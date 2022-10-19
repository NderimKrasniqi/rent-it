import { StatusBar } from 'expo-status-bar';
import AppCard from '../../components/AppCard';
import AppScreen from '../../components/AppScreen';
import { CardData, cardData } from '../../utils/cardData';
import { FlatList } from 'react-native-gesture-handler';
import { FeedStackParamsList } from '../../navigator/FeedNavigator';
import { StackScreenProps } from '@react-navigation/stack';

type ProductFeedScreenProps = StackScreenProps<
  FeedStackParamsList,
  'ProductFeedScreen'
>;

const ProductFeedScreen = ({ navigation }: ProductFeedScreenProps) => {
  return (
    <AppScreen className="flex-1 bg-light justify-center px-5">
      <FlatList<CardData>
        data={cardData}
        renderItem={({ item }) => (
          <AppCard
            {...item}
            onPress={() => navigation.navigate('ProductDetailScreen', { item })}
          />
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
