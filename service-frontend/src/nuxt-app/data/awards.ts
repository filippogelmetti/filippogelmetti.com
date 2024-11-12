import type { Award } from '~/models/award';
import { AwardId } from '~/models/award-id';

type HashTableAwards<T> = {
  [key in AwardId]: T;
};

export const awards: HashTableAwards<Award> = {
  cocklebaywharf: {
    id: AwardId.cocklebaywharf,
    date: new Date(),
    websiteUrl:
      'https://interactivemediaawards.com/winners/certificate.asp?param=761936&cat=1',
    screenshot: 'cocklebaywharf.png',
  },
  playsafe: {
    id: AwardId.playsafe,
    date: new Date(),
    websiteUrl:
      'https://interactivemediaawards.com/winners/certificate.asp?param=287279&cat=1',
    screenshot: 'playsafe.png',
  },
  tinyhunter: {
    id: AwardId.tinyhunter,
    date: new Date(),
    websiteUrl:
      'https://interactivemediaawards.com/winners/certificate.asp?param=291388&cat=1',
    screenshot: 'tinyhunter.png',
  },
};
