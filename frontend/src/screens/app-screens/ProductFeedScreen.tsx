import { View, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppCard from '../../components/AppCard';
import colors from '../../utils/colors';

const ProductFeedScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white justify-center mx-10">
      <StatusBar animated={true} />
      <AppCard />
    </SafeAreaView>
  );
};

export default ProductFeedScreen;
