import type { Award } from "~/models/award";
import { AwardId } from "~/models/award-id";

type HashTableAwards<T> = {
  [key in AwardId]: T;
};

export const awards: HashTableAwards<Award> = {
  cocklebaywharf: {
    id: AwardId.cocklebaywharf,
    date: new Date("2017-03-01"),
    websiteUrl:
      "https://interactivemediaawards.com/winners/certificate.asp?param=761936&cat=1",
    screenshot: "cocklebaywharf.png",
    description:
      "Best in class - Retail. Awarded March 2017 by Interactive Media Council for the website Cockle Bay Wharf.",
  },
  playsafe: {
    id: AwardId.playsafe,
    date: new Date("2012-11-01"),
    websiteUrl:
      "https://interactivemediaawards.com/winners/certificate.asp?param=287279&cat=1",
    screenshot: "playsafe.png",
    description:
      "Best in class - Education. Awarded November 2012 by Interactive Media Council for the website Play Safe - Ministry of Health New South Wales. Built with Drupal and WCAG standards, scoring 100/100 in functionality.",
  },
  tinyhunter: {
    id: AwardId.tinyhunter,
    date: new Date("2014-01-01"),
    websiteUrl:
      "https://interactivemediaawards.com/winners/certificate.asp?param=291388&cat=1",
    screenshot: "tinyhunter.png",
    description:
      "Best in class - Marketing. Awarded January 2014 by Interactive Media Council for the website Tinyhunter.",
  },
};
