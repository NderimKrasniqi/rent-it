import { Ionicons } from '@expo/vector-icons';

export interface AccountListData {
  id: number;
  title: string;
  bgColor: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  screenName: string;
}

export const listData: AccountListData[] = [
  {
    id: 1,
    title: 'Settings',
    bgColor: '#06aeda',
    icon: 'person-add-outline',
    screenName: 'ProfileScreen',
  },
  {
    id: 2,
    title: 'My Listings',
    bgColor: '#FFC107',
    icon: 'list',
    screenName: 'ProductListScreen',
  },
  {
    id: 3,
    title: 'Messages',
    bgColor: '#4CAF50',
    icon: 'mail-outline',
    screenName: 'MessageListScreen',
  },
];
