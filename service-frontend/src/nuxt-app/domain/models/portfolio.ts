import type { Award } from "./award";
import type { CategoryProjectType } from "./category-project-type";
import type { Client } from "./client";
import type { Country } from "./country";
import type { Tech } from "./tech";

export type Portfolio = {
  slug: string;
  name: string;
  categoriesProjectType?: CategoryProjectType[];
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
  shortDescription?: string;
  keyFeatures?: string[];
  skillsLearned?: string[];
};
