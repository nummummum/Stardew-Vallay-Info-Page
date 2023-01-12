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
