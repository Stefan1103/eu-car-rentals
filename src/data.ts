import {
  ILocations,
  InavLinks,
  IvehicleModels,
  IuserTestimonials,
  IFaq,
} from "./models";

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

export const userTestimonials: IuserTestimonials[] = [
  {
    id: 1,
    user: "Bruce Wayne",
    comment:
      '"I rented the car from this website and my experiance was amazing starting wtih how easy it is to book a car from the website also the cars are in a very good condition well kept. Rent prices are amazing you can\'t get better then this ones!"',
    picture: "images/icons8-batman-48.png",
  },
  {
    id: 1,
    user: "Jack Napier",
    comment:
      '"Highly recommend this rental service the car was very reliable made my trip safe and fun. The Website is amazing and easy to use."',
    picture: "images/icons8-joker-movie-100.png",
  },
];

export const faq: IFaq[] = [
  {
    id: 1,
    question: "1. What is special about eu-car-rentals?",
    answer:
      "Our prices are unbeatable in the market, ensuring you get the most value for your money. We have large range of prices and car models that suit evryones taste and budget.",
  },
  {
    id: 2,
    question: "2. How do i book a car?",
    answer:
      "You can book a car through our website, specifically the book a ride section. If you have some technical problem or you have any other questions about the car modesl you can always go to our contact page and either send us a message or use the phone-number to speak with operator.",
  },
  {
    id: 3,
    question: "3. Is there a refund policy?",
    answer:
      "We are very confident in our car models. Thats why we certenly offer a refund policy for disatisfactory service, for example if you have any kind of problem with the car if it brakes down, our policy is to fully refund you and give you 50% discount on the next booking you do. All this can be arranged by contacting us via the contact page.",
  },
];
