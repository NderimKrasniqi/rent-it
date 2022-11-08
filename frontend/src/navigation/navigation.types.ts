import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { CardData } from '../utils/cardData';

export type TabParamList = {
  FeedNavigator: NavigatorScreenParams<FeedStackParamsList>;
  ProductEditScreen: undefined;
  AccountNavigator: NavigatorScreenParams<AccountStackParamsList>;
};

export type AccountStackParamsList = {
  AccountScreen: undefined;
  ProductListScreen: undefined;
  MessageListScreen: undefined;
  ProfileScreen: undefined;
};

export type FeedStackParamsList = {
  ProductFeedScreen: undefined;
  ProductDetailScreen: {
    item: CardData;
  };
};

export type AccountScreenProps = CompositeScreenProps<
  StackScreenProps<AccountStackParamsList, 'AccountScreen'>,
  BottomTabScreenProps<TabParamList>
>;

export type ProductListScreenProps = CompositeScreenProps<
  StackScreenProps<AccountStackParamsList, 'ProductListScreen'>,
  BottomTabScreenProps<TabParamList>
>;

export type ProductDetailScreenProps = StackScreenProps<FeedStackParamsList, 'ProductDetailScreen'>;

export type ProductFeedScreenProps = StackScreenProps<FeedStackParamsList, 'ProductFeedScreen'>;
