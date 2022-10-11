import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import App from '../../../App';
import AppCard from '../../components/AppCard';
import AppCardList from '../../components/AppCardList';
import AppScreen from '../../components/AppScreen';
import { cardData } from '../../utils/cardData';

const ProductFeedScreen = () => {
  return (
    <AppScreen className="flex-1 bg-light justify-center">
      <AppCardList data={cardData} />

      <StatusBar style="auto" />
    </AppScreen>
  );
};

export default ProductFeedScreen;
