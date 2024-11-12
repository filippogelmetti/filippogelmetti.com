import type { Client } from '~/models/client';
import { ClientId } from '~/models/client-id';

type HashTableClients<T> = {
  [key in ClientId]: T;
};

export const clients: HashTableClients<Client> = {
  ipa: {
    id: ClientId.ipa,
    name: 'Infrastructure Partnership Australia',
    logo: 'anzip.png',
    websiteUrl: 'https://infrastructure.org.au',
  },
  crown: {
    id: ClientId.crown,
    name: 'Crown Furniture',
    logo: 'crown.svg',
    websiteUrl: 'https://crownfurniture.com.au',
  },
  lion: {
    id: ClientId.lion,
    name: 'Lion',
    logo: 'lion.png',
    websiteUrl: 'https://lionco.com',
  },
  diageo: {
    id: ClientId.diageo,
    name: 'Diageo',
    logo: 'diageo.png',
    websiteUrl: 'https://diageo.com.au',
  },
  dorf: {
    id: ClientId.dorf,
    name: 'Dorf',
    logo: 'dorf.png',
    websiteUrl: 'https://www.dorf.com.au',
  },
  cub: {
    id: ClientId.cub,
    name: 'Carlton & United Breweries',
    logo: 'cub.png',
    websiteUrl: 'https://cub.com.au',
  },
  airnz: {
    id: ClientId.airnz,
    name: 'Air New Zealand',
    logo: 'airnz.png',
    websiteUrl: 'https://www.airnewzealand.com.au',
  },
  argyle: {
    id: ClientId.argyle,
    name: 'Argyle Pink Diamonds',
    logo: 'argyle.svg',
    websiteUrl: 'https://argylepinkdiamonds.com.au',
  },
  lark: {
    id: ClientId.lark,
    name: 'Lark',
    logo: 'lark.png',
    websiteUrl: 'https://larkdistillery.com',
  },
  beerenbe: {
    id: ClientId.beerenbe,
    name: 'Beerenberg',
    logo: 'beerenberg.png',
    websiteUrl: 'https://beerenberg.com.au',
  },
  booksandgifts: {
    id: ClientId.booksandgifts,
    name: 'Books & Gifts Direct',
    logo: 'bagd.png',
    websiteUrl: 'https://booksgiftsdirect.com',
  },
  cocklebay: {
    id: ClientId.cocklebay,
    name: 'Cockle Bay Wharf',
    logo: 'cocklebay.png',
    websiteUrl: 'https://www.cocklebaywharf.com.au',
  },
  tinyhunter: {
    id: ClientId.tinyhunter,
    name: 'Tiny Hunter',
    logo: 'tinyhunter.png',
    websiteUrl: 'https://tinyhunter.com.au',
  },
  sydneyairport: {
    id: ClientId.sydneyairport,
    name: 'Sydney Airport',
    logo: 'sydney-airport.png',
    websiteUrl: 'https://www.sydneyairport.com.au',
  },
  coem: {
    id: ClientId.coem,
    name: 'College of Event Management',
    logo: 'coem.png',
    websiteUrl: 'https://collegeofeventmanagement.edu.au',
  },
  healthnsw: {
    id: ClientId.healthnsw,
    name: 'Health NSW',
    logo: 'nswhealth.png',
    websiteUrl: 'https://www.health.nsw.gov.au',
  },
  shillo: {
    id: ClientId.shillo,
    name: 'Shillington College',
    logo: 'shillington.png',
    websiteUrl: 'https://www.shillingtoneducation.com',
  },
  tty: {
    id: ClientId.tty,
    name: 'TTY Creo',
    logo: 'tty.png',
    websiteUrl: 'https://www.ttycreo.it',
  },
  airsilent: {
    id: ClientId.airsilent,
    name: 'Air Silent Italia',
    logo: 'airsilent.jpg',
    websiteUrl: '',
  },
  moelca: {
    id: ClientId.moelca,
    name: 'Moelca',
    logo: 'moelca.png',
    websiteUrl: 'http://www.moelca.it',
  },
};
