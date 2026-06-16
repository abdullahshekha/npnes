export type Generator = {
  slug: string;
  name: string;
  apsId?: string;
  brand: string;
  model: string;
  year?: number;
  kw: number;
  fuel: string;
  rpm?: number;
  hz?: number;
  hours?: number;
  condition?: string;
  description?: string;
  scopeOfDelivery?: string[];
  images: string[];
};

export const generators: Generator[] = [
  {
    slug: "jenbacher-j212-gsb-21",
    name: "JENBACHER J212 GSB 21",
    apsId: "APS-3259",
    brand: "Jenbacher",
    model: "J212 GSB 21",
    year: 2002,
    kw: 529,
    fuel: "Gas",
    rpm: 1500,
    hz: 50,
    hours: 43000,
    condition: "EXCELLENT, VERY WELL MAINTAINED — 30K OVERHAULING HAS BEEN DONE.",
    description:
      "AVAILABLE FOR SALE!! USED GAS GENERATOR SET.\n\nMAKE: JENBACHER\nTYPE: J212 GSB 21\nPOWER RATING: 529 KW\nYEAR: 2002\nHOURS: 43,000\nALTERNATOR: STAMFORD, 400V, 50HZ, 1500 RPM",
    scopeOfDelivery: [
      "Engine",
      "Alternator",
      "Baseframe",
      "Control Panel",
      "Gas Street",
    ],
    images: [
      "/images/used-power-plants/jenbacher-j212-gsb-21/1-2.jpg",
      "/images/used-power-plants/jenbacher-j212-gsb-21/2-2.jpg",
      "/images/used-power-plants/jenbacher-j212-gsb-21/3-1.jpg",
      "/images/used-power-plants/jenbacher-j212-gsb-21/4-1.jpg",
      "/images/used-power-plants/jenbacher-j212-gsb-21/5-1.jpg",
      "/images/used-power-plants/jenbacher-j212-gsb-21/6-1.jpg",
      "/images/used-power-plants/jenbacher-j212-gsb-21/7-1.jpg",
      "/images/used-power-plants/jenbacher-j212-gsb-21/8-1.jpg",
      "/images/used-power-plants/jenbacher-j212-gsb-21/9.jpg",
      "/images/used-power-plants/jenbacher-j212-gsb-21/11.jpg",
      "/images/used-power-plants/jenbacher-j212-gsb-21/12.jpg",
    ],
  },
];
