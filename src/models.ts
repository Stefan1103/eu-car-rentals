export interface InavLinks {
  id: number;
  title: string;
  url: string;
}
export interface IvehicleModels {
  id: number;
  brand: string;
  model: string;
  year: number;
  doors: number;
  AC: string;
  Transmission: string;
  Fuel: string;
  img: string;
  price: number;
}
export interface ILocations {
  id: number;
  name: string;
}

export interface IuserTestimonials {
  id: number;
  user: string;
  comment: string;
  picture: string;
}

export interface IFaq {
  id: number;
  question: string;
  answer: string;
}
