import type { Client } from '../domain/models/client';
import { ClientId } from '../domain/models/client-id';

type HashTableClients<T> = {
  [key in ClientId]: T;
};

export const clients: HashTableClients<Client> = {
  harveynorman: {
    id: ClientId.harveynorman,
    name: 'Harvey Norman',
    logo: 'harvey-norman.svg',
    websiteUrl: 'https://harveynorman.com.au',
  },
  ipa: {
    id: ClientId.ipa,
    name: 'Infrastructure Partnership Australia',
    logo: 'anzip.svg',
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
    logo: 'lion.svg',
    websiteUrl: 'https://lionco.com',
  },
  diageo: {
    id: ClientId.diageo,
    name: 'Diageo',
    logo: 'diageo.svg',
    websiteUrl: 'https://diageo.com.au',
  },
  dorf: {
    id: ClientId.dorf,
    name: 'Dorf',
    logo: 'dorf.svg',
    websiteUrl: 'https://www.dorf.com.au',
  },
  cub: {
    id: ClientId.cub,
    name: 'Carlton & United Breweries',
    logo: 'cub.svg',
    websiteUrl: 'https://cub.com.au',
  },
  airnz: {
    id: ClientId.airnz,
    name: 'Air New Zealand',
    logo: 'air-new-zealand.svg',
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
    logo: 'lark.svg',
    websiteUrl: 'https://larkdistillery.com',
  },
  beerenbe: {
    id: ClientId.beerenbe,
    name: 'Beerenberg',
    logo: 'beerenberg.svg',
    websiteUrl: 'https://beerenberg.com.au',
  },
  booksandgifts: {
    id: ClientId.booksandgifts,
    name: 'Books & Gifts Direct',
    logo: 'bagd.svg',
    websiteUrl: 'https://booksgiftsdirect.com',
  },
  cocklebay: {
    id: ClientId.cocklebay,
    name: 'Cockle Bay Wharf',
    logo: 'cocklebay.svg',
    websiteUrl: 'https://www.cocklebaywharf.com.au',
  },
  tinyhunter: {
    id: ClientId.tinyhunter,
    name: 'Tiny Hunter',
    logo: 'tinyhunter.svg',
    websiteUrl: 'https://tinyhunter.com.au',
  },
  sydneyairport: {
    id: ClientId.sydneyairport,
    name: 'Sydney Airport',
    logo: 'sydney-airport.svg',
    websiteUrl: 'https://www.sydneyairport.com.au',
  },
  coem: {
    id: ClientId.coem,
    name: 'College of Event Management',
    logo: 'coem.svg',
    websiteUrl: 'https://collegeofeventmanagement.edu.au',
  },
  healthnsw: {
    id: ClientId.healthnsw,
    name: 'Health NSW',
    logo: 'nswhealth.svg',
    websiteUrl: 'https://www.health.nsw.gov.au',
  },
  shillo: {
    id: ClientId.shillo,
    name: 'Shillington College',
    logo: 'shillington.svg',
    websiteUrl: 'https://www.shillingtoneducation.com',
  },
  tty: {
    id: ClientId.tty,
    name: 'TTY Creo',
    logo: 'tty.svg',
    websiteUrl: 'https://www.ttycreo.it',
  },
  airsilent: {
    id: ClientId.airsilent,
    name: 'Air Silent Italia',
    logo: 'airsilent.svg',
    websiteUrl: '',
  },
  moelca: {
    id: ClientId.moelca,
    name: 'Moelca',
    logo: 'moelca.svg',
    websiteUrl: 'http://www.moelca.it',
  },
};
