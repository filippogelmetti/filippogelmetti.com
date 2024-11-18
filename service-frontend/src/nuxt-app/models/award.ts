import { AwardId } from "./award-id";

export type Award = {
  id: AwardId;
  websiteUrl: string;
  date: Date;
  screenshot: string;
  description: string;
};
