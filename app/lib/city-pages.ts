export const cityPages = [
  { city: "Airdrie", slug: "cash-for-cars-airdrie" },
  { city: "Cochrane", slug: "cash-for-cars-cochrane" },
  { city: "Chestermere", slug: "junk-my-car-chestermere" },
  { city: "Lethbridge", slug: "cash-for-cars-lethbridge" },
  { city: "Medicine Hat", slug: "junk-my-car-medicine-hat" },
  { city: "Red Deer", slug: "cash-for-cars-red-deer" },
  { city: "Okotoks", slug: "cash-for-cars-okotoks" },
  { city: "High River", slug: "cash-for-cars-high-river" },
  { city: "Strathmore", slug: "junk-my-car-strathmore" },
  { city: "Olds", slug: "cash-for-cars-olds" },
  { city: "Brooks", slug: "junk-my-car-brooks" },
  { city: "Canmore", slug: "junk-my-car-canmore" },
  { city: "Banff", slug: "junk-my-car-banff" },
  { city: "Diamond Valley", slug: "junk-my-car-diamond-valley" },
  { city: "Didsbury", slug: "junk-my-car-didsbury" },
  { city: "Drumheller", slug: "junk-my-car-drumheller" },
] as const;

export type CityPage = (typeof cityPages)[number];
