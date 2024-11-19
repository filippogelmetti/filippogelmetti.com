import type { Country } from "~~/layers/models/country";
import { CountryId } from "~~/layers/models/country-id";

type HashTableCountries<T> = {
  [key in CountryId]: T;
};

export const countries: HashTableCountries<Country> = {
  aus: {
    id: CountryId.aus,
    name: "Australia",
    flagIcon: "australia.svg",
  },
  ita: {
    id: CountryId.ita,
    name: "Italy",
    flagIcon: "italy.svg",
  },
};
