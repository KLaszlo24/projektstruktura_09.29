import bananImage from "../assets/images/banan.png";
import birsalmaImage from "../assets/images/birsalma.png";
import mogyoroImage from "../assets/images/mogyoro.png";
import granatalmaImage from "../assets/images/granatalma.png";
 import type {FruitCardData,FruitTableRow,ListSectionData,} from "../types/palinka";
 
export const introParagraphs: string[] = [
  "A pálinka a magyar gasztronómiai és kulturális hagyományok egyik ismert itala. Készítése során erjesztett gyümölcsből lepárlással állítanak elő gyümölcspárlatot.",
  "A pálinka készítésének egyik fontos alapanyaga a megfelelő minőségű, érett gyümölcs. Gyakori alapanyag például az alma, a szilva, a körte, a meggy és a kajszibarack.",
  "A jó minőségű pálinka készítésénél az alapanyag minősége és a megfelelő technológia egyaránt fontos.",
];
 
export const listSections: ListSectionData[] = [
  {
    cim: "Gyakori alapanyagok",
    tartalom: [
      "Alma",
      "Körte",
      "Szilva",
      "Meggy",
      "Kajszibarack",
    ],
    rendelt: false,
  },
  {
    cim: "Népszerű pálinkák",
    tartalom: [
      "Szilvapálinka",
      "Barackpálinka",
      "Körtepálinka",
      "Almapálinka",
      "Birsalmapálinka",
    ],
    rendelt: true,
  },
  {
    cim: "Íz- és illatjegyek",
    tartalom: [
      "Gyümölcsös",
      "Illatos",
      "Érett gyümölcsre jellemző",
      "Harmonikus",
      "Tiszta lecsengésű",
    ],
    rendelt: true,
  },
];
 
export const fruitTableRows: FruitTableRow[] = [
  ["Alma", "Szilva", "Körte"],
  ["Meggy", "Kajszi", "Birsalma"],
  ["Cseresznye", "Őszibarack", "Szőlő"],
];
 
export const fruitCards: FruitCardData[] = [
  {
    id: "banan",
    name: "Banán",
    image: bananImage,
    alt: "Banán",
    leiras:
      "A banán trópusi gyümölcs, amely Magyarországon nem jellemző pálinkaalapanyag.",
  },
  {
    id: "birsalma",
    name: "Birsalma",
    image: birsalmaImage,
    alt: "Birsalma",
    leiras:
      "A birsalma jellegzetes illatú gyümölcs, amelyből gyümölcspárlat is készíthető.",
  },
  {
    id: "mogyoro",
    name: "Mogyoró",
    image: mogyoroImage,
    alt: "Mogyoró",
    leiras:
      "A mogyoró olajos mag, ezért nem a hagyományos gyümölcspárlatok alapanyagai közé tartozik.",
  },
  {
    id: "granatalma",
    name: "Gránátalma",
    image: granatalmaImage,
    alt: "Gránátalma",
    leiras:
      "A gránátalma gyümölcs, jellegzetes édes-savanykás ízzel és sok apró maggal.",
  },
];
 
export const importantFacts: string[] = [
  "A pálinka gyümölcsből készített párlat.",
  "Az alapanyag minősége jelentősen befolyásolja a késztermék tulajdonságait.",
  "A gyümölcsöt először elő kell készíteni és erjeszteni kell.",
  "Az erjesztett gyümölcscefréből lepárlással készül a párlat.",
  "A pálinka megnevezés használatát jogszabály szabályozza.",
];