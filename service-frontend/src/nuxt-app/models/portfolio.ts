import type { Award } from './award';
import type { Client } from './client';
import type { Country } from './country';
import type { Tech } from './tech';

export type Portfolio = {
  slug: string;
  name: string;
  date?: Date;
  client?: Client;
  country?: Country;
  nrOfScreenshots: number;
  subDirPathName: string;
  url?: string;
  urlWebArchive?: string;
  isOnline?: boolean;
  techs?: Tech[];
  award?: Award;
  description?: string[];
  keyFeatures?: string[];
  skillsLearned?: string[];
};
