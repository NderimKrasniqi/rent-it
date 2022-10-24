import { Ionicons } from '@expo/vector-icons';
export interface AccountListData {
  id: number;
  title: string;
  bgColor: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
}
export const listData: AccountListData[] = [
  {
    id: 1,
    title: 'My Listings',
    bgColor: '#FFC107',
    icon: 'list',
  },
  {
    id: 2,
    title: 'Messages',
    bgColor: '#4CAF50',
    icon: 'mail-outline',
  },
];
