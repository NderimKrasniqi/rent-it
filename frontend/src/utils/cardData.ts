export interface CardData {
  id: number;
  title: string;
  description: string;
  city: string;
  image: string;
  price: string;
}
export const cardData: CardData[] = [
  {
    id: 1,
    title: 'Beautiful and dramatic Antelope Canyon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    city: 'USA',
    image: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    price: '100',
  },
  {
    id: 2,
    title: 'Earlier this morning, NYC',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    city: 'USA',
    image: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    price: '80',
  },
  {
    id: 3,
    title: 'White Pocket Sunset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    city: 'USA',
    image: 'https://source.unsplash.com/3MNzGlQM7qs/800x599',
    price: '78',
  },
  {
    id: 4,
    title: 'Acrocorinth, Greece',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    city: 'Greece',
    image: 'https://source.unsplash.com/AWh9C-QjhE4/600x799',
    price: '115',
  },
  {
    id: 10,
    title: 'Thelandscape of New Zealand',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    city: 'New Zealand',
    image: 'https://source.unsplash.com/ATt_9Pp7LEI/800x599',
    price: '98',
  },
];
