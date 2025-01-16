import type { Award } from '@domain/models/award';
import { AwardId } from '@domain/models/award-id';

type HashTableAwards<T> = {
  [key in AwardId]: T;
};

export const awards: HashTableAwards<Award> = {
  cocklebaywharf: {
    id: AwardId.cocklebaywharf,
    date: new Date('2017-03-01'),
    image: '2017-03-01 cocklebaywharf.png',
    websiteUrl:
      'https://web.archive.org/web/20211130122251/https://www.interactivemediaawards.com/winners/certificate.asp?param=761936&cat=1',
    description:
      'Best in class - Retail. Awarded March 2017 by Interactive Media Council for the website Cockle Bay Wharf.',
  },
  playsafe: {
    id: AwardId.playsafe,
    date: new Date('2012-11-01'),
    image: '2012-11-01 playsafe.png',
    websiteUrl:
      'https://web.archive.org/web/20211130125139/https://www.interactivemediaawards.com/winners/certificate.asp?param=287279&cat=1',
    description:
      'Best in class - Education. Awarded November 2012 by Interactive Media Council for the website Play Safe - Ministry of Health New South Wales. Built with Drupal and WCAG standards, scoring 100/100 in functionality.',
  },
  tinyhunter: {
    id: AwardId.tinyhunter,
    date: new Date('2014-01-01'),
    image: '2014-01-01 tinyhunter.png',
    websiteUrl:
      'https://web.archive.org/web/20211130115955/https://interactivemediaawards.com/winners/certificate.asp?param=291388&cat=1',
    description:
      'Best in class - Marketing. Awarded January 2014 by Interactive Media Council for the website Tinyhunter.',
  },
};
