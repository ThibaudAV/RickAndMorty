export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  image: string;
  url: string;
  created: string;
}
