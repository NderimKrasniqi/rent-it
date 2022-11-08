import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { CardData } from '../utils/cardData';

export type TabParamList = {
  FeedNavigator: NavigatorScreenParams<FeedStackParamsList>;
  ProductEditScreen: undefined;
  AccountNavigator: NavigatorScreenParams<AccountStackParamsList>;
};

export type RootStackScreenProps<T extends keyof TabParamList> = BottomTabScreenProps<
  TabParamList,
  T
>;

export type FeedStackProps<T extends keyof FeedStackParamsList> = CompositeScreenProps<
  StackScreenProps<FeedStackParamsList, T>,
  RootStackScreenProps<keyof TabParamList>
>;

export type AccountStackProps<T extends keyof AccountStackParamsList> = CompositeScreenProps<
  StackScreenProps<AccountStackParamsList, T>,
  RootStackScreenProps<keyof TabParamList>
>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = StackScreenProps<
  AuthStackParamList,
  T
>;

export type AuthStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
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
