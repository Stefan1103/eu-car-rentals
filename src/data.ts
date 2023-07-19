import { ILocations, InavLinks, IvehicleModels } from "./models";

export const navLinks: InavLinks[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About us",
    url: "/about",
  },
  {
    id: 3,
    title: "Vehicle Models",
    url: "/vehicle-models",
  },
  {
    id: 4,
    title: "Testimonials",
    url: "/testimonials",
  },
  {
    id: 5,
    title: "Our Team",
    url: "/our-team",
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
  },
];

export const vehicles: IvehicleModels[] = [
  {
    id: 1,
    brand: "Volkswagen",
    model: "Golf 6",
    AC: "Yes",
    doors: 5,
    Fuel: "Diesel",
    Transmission: "Manual",
    year: 2017,
    img: "images/vw-golf-2017.png",
    price: 22,
  },
  {
    id: 2,
    brand: "Ford",
    model: "Mondeo",
    AC: "Yes",
    doors: 5,
    Fuel: "Gasoline",
    Transmission: "Automatic",
    year: 2016,
    img: "images/ford-mondeo-2016.png",
    price: 35,
  },
  {
    id: 3,
    brand: "Opel",
    model: "Astra",
    AC: "Yes",
    doors: 5,
    Fuel: "Gasoline",
    Transmission: "Manual",
    year: 2015,
    img: "images/opel-astra-2015.png",
    price: 19,
  },
  {
    id: 4,
    brand: "Audi",
    model: "A4",
    AC: "Yes",
    doors: 5,
    Fuel: "Gasoline",
    Transmission: "Manual",
    year: 2017,
    img: "images/audi-a4-2017.png",
    price: 55,
  },
  {
    id: 5,
    brand: "Huyndai",
    model: "Tucson",
    AC: "Yes",
    doors: 5,
    Fuel: "Diesel",
    Transmission: "Automatic",
    year: 2018,
    img: "images/huyndai-tucson-2018.png",
    price: 51,
  },
  {
    id: 6,
    brand: "KIA",
    model: "Sportage",
    AC: "Yes",
    doors: 5,
    Fuel: "Gasoline",
    Transmission: "Manual",
    year: 2017,
    img: "images/kia-sportage-2017.png",
    price: 47,
  },
  {
    id: 7,
    brand: "Ford",
    model: "Lincoln-Navigator",
    AC: "Yes",
    doors: 5,
    Fuel: "Gasoline",
    Transmission: "Manual",
    year: 2021,
    img: "images/lincoln-navigator-2021.png",
    price: 89,
  },
];

export const locations: ILocations[] = [
  {
    id: 1,
    name: "Budapest",
  },
  {
    id: 2,
    name: "Paris",
  },
  {
    id: 3,
    name: "Rome",
  },
  {
    id: 4,
    name: "Turin",
  },
  {
    id: 5,
    name: "Berlin",
  },
];
