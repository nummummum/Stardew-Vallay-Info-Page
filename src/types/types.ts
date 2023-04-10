export type vegetable = {
  bundle: Array<string>;
  name: string;
  season: string;
  sellprice: number;
  type: string;
};
export type bundleViewType = {
  name: string;
  portrait: string;
  explain: string;
};
export type characterType = {
  spring: daytype;
  summer: daytype;
  fall: daytype;
  winter: daytype;
};
export type daytype = {
  monday: Array<keyvalue>;
  tuesday: Array<keyvalue>;
  wednesday: Array<keyvalue>;
  thursday: Array<keyvalue>;
  friday: Array<keyvalue>;
  saterday: Array<keyvalue>;
  sunday: Array<keyvalue>;
};
export type keyvalue = {
  time: string;
  content: string;
};

export type InputItem = {
  id: number;
  time: string;
  content: string;
};

export type InputItem2 = {
  textArea: string;
};

export type ItemCover = {
  season: string;
  title: string;
  id: number;
  schedule: InputItem[];
};

export type ItemCover2 = {
  season: string;
  title: string;
  id: number;
  schedule: InputItem2[];
};

export type favoriteType = {
  favorite: {
    love: string;
    like: string;
    normal: string;
    dislike: string;
    hate: string;
  };
};
export type favoriteArrType = {
  love: string[];
  like: string[];
  normal: string[];
  dislike: string[];
  hate: string[];
};
export type eventContent = {
  id: number;
  content: string;
  friendship: number;
};
export type eventType = {
  id: number;
  condition: string;
  choice: eventContent[];
};
export type characterViewType = {
  name: string;
  marry: string;
  birth: string;
  gender: string;
  portrait: string;
  schedule: ItemCover[];
  favorite: favoriteArrType;
  event: eventType[];
};
export type characterViewType2 = {
  name: string;
  marry: string;
  birth: string;
  gender: string;
  portrait: string;
  schedule: ItemCover2[];
  favorite: favoriteArrType;
  event: eventType[];
};

export type FishType = {
  name: string;
  portrait: string;
  season: string;
  sellprice: string;
  purpose: string[];
  location: string;
  time: string;
  weather: string;
};
export type FoodType = {
  name: string;
  portrait: string;
  sellprice: string;
  purpose: string[];
  ingredient: string[];
  healing: number[];
  explain: string;
};
export type HarvestType = {
  name: string;
  portrait: string;
  buypricec: string;
  sellprice: string;
  purpose: string[];
  season: string;
  detail: string;
  healing: number[];
  explain: string;
  obtainday: number[];
};
export type MineralType = {
  name: string;
  portrait: string;
  sellprice: string;
  purpose: string[];
  explain: string;
};
export type PlantType = {
  name: string;
  portrait: string;
  purpose: string[];
  season: string;
  explain: string;
};
export type ProductType = {
  name: string;
  portrait: string;
  purpose: string[];
  healing: number[];
  sellprice: string;
  explain: string;
};
