import { ILang } from "@/models";

import enFlag from "@assets/flags/gb.svg";
import azFlag from "@assets/flags/az.svg";
import trFlag from "@assets/flags/tr.svg";

const languages: ILang[] = [
  {
    code: "en",
    flag: enFlag,
    name: "English",
  },
  {
    code: "az",
    flag: azFlag,
    name: "Azərbaycanca",
  },
  {
    code: "tr",
    flag: trFlag,
    name: "Türkçe",
  },
];

export { languages };
