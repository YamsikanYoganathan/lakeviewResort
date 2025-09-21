import cottage1Exterior from "../assets/cottage-1-exterior.webp";
import cottage1Bedrooom1 from "../assets/cottage-1-bedroom-1.webp";
import cottage1Bedrooom2 from "../assets/cottage-1-bedroom-2.webp";
import cottage1Bedrooom3 from "../assets/cottage-1-bedroom-3.webp";
import cottage1Bathroom1 from "../assets/cottage-1-bathroom-1.webp";
import cottage1Bathroom2 from "../assets/cottage-1-bathroom-2.webp";
import cottage1Diningroom1 from "../assets/cottage-1-diningroom-1.webp";
import cottage1Kitchen1 from "../assets/cottage-1-kitchen-1.webp";
import cottage1Mainroom1 from "../assets/cottage-1-mainroom-1.webp";
import cottage2Exterior from "../assets/cottage-2-exterior.webp";
import cottage2Bedrooom1 from "../assets/cottage-2-bedroom-1.webp";
import cottage2Bedrooom2 from "../assets/cottage-2-bedroom-2.webp";
import cottage2Bedrooom3 from "../assets/cottage-2-bedroom-3.webp";
import cottage2Bedrooom4 from "../assets/cottage-2-bedroom-4.webp";
import cottage2Bathroom1 from "../assets/cottage-2-bathroom-1.webp";
import cottage2Bathroom2 from "../assets/cottage-2-bathroom-2.webp";
import cottage2Mainroom1 from "../assets/cottage-2-mainroom-1.webp";
import cottage2Mainroom2 from "../assets/cottage-2-mainroom-2.webp";
import cottage2Mainroom3 from "../assets/cottage-2-mainroom-3.webp";
import cottage3Exterior from "../assets/cottage-3-exterior.webp";
import cottage3Bedrooom1 from "../assets/cottage-3-bedroom-1.webp";
import cottage3Bedrooom2 from "../assets/cottage-3-bedroom-2.webp";
import cottage3Mainroom1 from "../assets/cottage-3-mainroom-1.webp";
import cottage3Kitchen1 from "../assets/cottage-3-kitchen-1.webp";
import cottage4Exterior from "../assets/cottage-4-exterior.webp";
import cottage4Bedrooom1 from "../assets/cottage-4-bedroom-1.webp";
import cottage4Bedrooom2 from "../assets/cottage-4-bedroom-2.webp";
import cottage4Kitchen1 from "../assets/cottage-4-kitchen-1.webp";
import cottage4Kitchen2 from "../assets/cottage-4-kitchen-2.webp";
import cottage4Mainroom1 from "../assets/cottage-4-mainroom-1.webp";
import cottage5Exterior from "../assets/cottage-5-exterior.webp";
import cottage5Bedrooom1 from "../assets/cottage-5-bedroom-1.webp";
import cottage5Bedrooom2 from "../assets/cottage-5-bedroom-2.webp";
import cottage5Mainroom1 from "../assets/cottage-5-mainroom-1.webp";
import cottage5Kitchen1 from "../assets/cottage-5-kitchen-1.webp";
import cottage5Bathroom1 from "../assets/cottage-5-bathroom-1.webp";
import cottage5Bathroom2 from "../assets/cottage-5-bathroom-2.webp";
import cottage6Exterior from "../assets/cottage-6-exterior.webp";
import cottage6Bedrooom1 from "../assets/cottage-6-bedroom-1.webp";
import cottage6Mainroom1 from "../assets/cottage-6-mainroom-1.webp";
import cottage6Mainroom2 from "../assets/cottage-6-mainroom-2.webp";
import cottage6Kitchen1 from "../assets/cottage-6-kitchen-1.webp";
import cottage6Bathroom1 from "../assets/cottage-6-bathroom-1.webp";
import cottage6Bathroom2 from "../assets/cottage-6-bathroom-2.webp";
import cottage7Exterior from "../assets/cottage-7-exterior.webp";
import cottage7Bedrooom1 from "../assets/cottage-7-bedroom-1.webp";
import cottage7Bedrooom2 from "../assets/cottage-7-bedroom-2.webp";
import cottage7Bedrooom3 from "../assets/cottage-7-bedroom-3.webp";
import cottage7Mainroom1 from "../assets/cottage-7-mainroom-1.webp";
import cottage7Diningroom1 from "../assets/cottage-7-diningroom-1.webp";
import cottage7Diningroom2 from "../assets/cottage-7-diningroom-2.webp";
import cottage7Bathroom1 from "../assets/cottage-7-bathroom-1.webp";
import cottage7Bathroom2 from "../assets/cottage-7-bathroom-2.webp";
import cottage7Bathroom3 from "../assets/cottage-7-bathroom-3.webp";
import cottage8Bedroom1 from "../assets/cottage-8-bedroom-1.webp";
import cottage8Bedroom2 from "../assets/cottage-8-bedroom-2.webp";
import cottage8Bedroom3 from "../assets/cottage-8-bedroom-3.webp";
import cottage8Bedroom4 from "../assets/cottage-8-bedroom-4.webp";
import cottage8Kitchen1 from "../assets/cottage-8-kitchen-1.webp";
import cottage8Kitchen2 from "../assets/cottage-8-kitchen-2.webp";
import cottage8Mainroom1 from "../assets/cottage-8-mainroom-1.webp";
import cottage8Mainroom2 from "../assets/cottage-8-mainroom-2.webp";
import cottage8Exterior from "../assets/cottage-8-exterior.webp";
import cottage8Upstairs from "../assets/cottage-8-upstairs.webp";

export const cottagesData = [
  {
    id: "cottage-1",
    title: "Cottage 1",
    description:
      "A 2 bedroom cottage for up to 4 people, consisting of 2 double beds, 3 piece bathroom, separate dining area and a fireplace in the living room.",
    specialNote: "Pets allowed, perfect for families.",
    href: "/cottages/cottage-1",
    imageSrc: cottage1Exterior,
    imageAlt: "Lakeview Cottage exterior with lake view.",
    images: [
      cottage1Exterior,
      cottage1Bedrooom1,
      cottage1Bathroom1,
      cottage1Diningroom1,
      cottage1Kitchen1,
      cottage1Mainroom1,
      cottage1Bedrooom2,
      cottage1Bathroom2,
      cottage1Bedrooom3,
    ],
    details: {
      bedrooms: 2,
      bathrooms: 1,
      beds: 2,
      guests: 4,
    },
    cottagePrice: {
      perDay: 225,
      perWeek: 1025,
      extraPersonDay: 50,
      extraPersonWeek: 210,
    },
    extraFunPrice: {
      BoatNMotorPerHour: 50,
      BoatNMotorPerDay: 100,
      BoatNMotorPerWeek: 250,
      canoePerHour: 25,
      canoePerDay: 50,
      canoePerWeek: 100,
    },
    features: [
      "Fully equipped kitchen",
      "Private deck with BBQ",
      "WiFi",
      "Fireplace",
      "Lake access",
      "Parking",
    ],
    otherDetails:
      "Check-in: 3 PM | Check-out: 11 AM | Free parking available on site.",
  },
  {
    id: "cottage-2",
    title: "Cottage 2",
    description:
      "A 3 bedroom cottage for up to six people, with 1 queen-size bed, 1 double bed, a set of upper and lower bunks, 4 pc. bath with small bathtub, and a fireplace in the combination living/dining area. Electric heat.",
    specialNote: "Pets allowed, perfect for families.",
    href: "/cottages/cottage-2",
    imageSrc: cottage2Exterior,
    imageAlt: "Forest Retreat nestled in trees.",
    images: [
      cottage2Exterior,
      cottage2Bedrooom1,
      cottage2Bathroom1,
      cottage2Mainroom1,
      cottage2Bedrooom2,
      cottage2Bathroom2,
      cottage2Bedrooom3,
      cottage2Bedrooom4,
      cottage2Mainroom2,
      cottage2Mainroom3,
    ],
    details: {
      bedrooms: 3,
      bathrooms: 1,
      beds: 2,
      guests: 6,
    },
    cottagePrice: {
      perDay: 225,
      perWeek: 1175,
      extraPersonDay: 50,
      extraPersonWeek: 210,
    },
    extraFunPrice: {
      BoatNMotorPerHour: 50,
      BoatNMotorPerDay: 100,
      BoatNMotorPerWeek: 250,
      canoePerHour: 25,
      canoePerDay: 50,
      canoePerWeek: 100,
    },
    features: [
      "Fully equipped kitchen",
      "Private deck with BBQ",
      "WiFi",
      "Fireplace",
      "Lake access",
      "Parking",
    ],
    otherDetails:
      "Check-in: 3 PM | Check-out: 11 AM | Free parking available on site.",
  },
  {
    id: "cottage-3",
    title: "Cottage 3",
    description:
      "A 3 bedroom cottage for up to 6 people consisting of 1 queen size bed, 1 double bed and a set of full twin upper and lower bunks. It has a 3 piece bathroom and a combination kitchen/dining/living area including a woodstove and electric heat.",
    specialNote: "Pets allowed, perfect for families.",
    href: "/cottages/cottage-3",
    imageSrc: cottage3Exterior,
    imageAlt: "Family Cottage with spacious yard.",
    images: [
      cottage3Exterior,
      cottage3Bedrooom1,
      cottage3Kitchen1,
      cottage3Mainroom1,
      cottage3Bedrooom2,
    ],
    details: {
      bedrooms: 3,
      bathrooms: 1,
      beds: 2,
      guests: 6,
    },
    cottagePrice: {
      perDay: 255,
      perWeek: 1175,
      extraPersonDay: 50,
      extraPersonWeek: 210,
    },
    extraFunPrice: {
      BoatNMotorPerHour: 50,
      BoatNMotorPerDay: 100,
      BoatNMotorPerWeek: 250,
      canoePerHour: 25,
      canoePerDay: 50,
      canoePerWeek: 100,
    },
    features: [
      "Fully equipped kitchen",
      "Private deck with BBQ",
      "WiFi",
      "Fireplace",
      "Lake access",
      "Parking",
    ],
    otherDetails:
      "Check-in: 3 PM | Check-out: 11 AM | Free parking available on site.",
  },
  {
    id: "cottage-4",
    title: "Cottage 4",
    description:
      "A 3 bedroom cottage for up to 6 people consisting of 1 queen size bed and 2 double beds, a 3 piece bathroom and a combination living/dining/kitchen area, complete with woodstove.",
    specialNote: "Pets allowed, perfect for families.",
    href: "/cottages/cottage-4",
    imageSrc: cottage4Exterior,
    imageAlt: "Luxury Cottage with premium design.",
    images: [
      cottage4Exterior,
      cottage4Bedrooom1,
      cottage4Bedrooom2,
      cottage4Kitchen1,
      cottage4Kitchen2,
      cottage4Mainroom1,
    ],
    details: {
      bedrooms: 3,
      bathrooms: 1,
      beds: 3,
      guests: 6,
    },
    cottagePrice: {
      perDay: 255,
      perWeek: 1175,
      extraPersonDay: 50,
      extraPersonWeek: 210,
    },
    extraFunPrice: {
      BoatNMotorPerHour: 50,
      BoatNMotorPerDay: 100,
      BoatNMotorPerWeek: 250,
      canoePerHour: 25,
      canoePerDay: 50,
      canoePerWeek: 100,
    },
    features: [
      "Fully equipped kitchen",
      "Private deck with BBQ",
      "WiFi",
      "Fireplace",
      "Lake access",
      "Parking",
    ],
    otherDetails:
      "Check-in: 3 PM | Check-out: 11 AM | Free parking available on site.",
  },
  {
    id: "cottage-5",
    title: "Cottage 5",
    description:
      "A 2 bedroom cottage for up to 4 people with a double bed and a set of full twin upper and lower bunk beds, 3 piece bathroom and a combination living/dining/kitchen area, complete with woodstove.",
    specialNote: "Pets allowed, perfect for families.",
    href: "/cottages/cottage-5",
    imageSrc: cottage5Exterior,
    imageAlt: "Romantic Cabin for couples.",
    images: [
      cottage5Exterior,
      cottage5Bedrooom1,
      cottage5Bedrooom2,
      cottage5Mainroom1,
      cottage5Kitchen1,
      cottage5Bathroom1,
      cottage5Bathroom2,
    ],
    details: {
      bedrooms: 2,
      bathrooms: 1,
      beds: 2,
      guests: 4,
    },
    cottagePrice: {
      perDay: 225,
      perWeek: 1125,
      extraPersonDay: 50,
      extraPersonWeek: 210,
    },
    extraFunPrice: {
      BoatNMotorPerHour: 50,
      BoatNMotorPerDay: 100,
      BoatNMotorPerWeek: 250,
      canoePerHour: 25,
      canoePerDay: 50,
      canoePerWeek: 100,
    },
    features: [
      "Fully equipped kitchen",
      "Private deck with BBQ",
      "WiFi",
      "Fireplace",
      "Lake access",
      "Parking",
    ],
    otherDetails:
      "Check-in: 3 PM | Check-out: 11 AM | Free parking available on site.",
  },
  {
    id: "cottage-6",
    title: "Cottage 6",
    description:
      "A 1 bedroom cottage for 2 people with queen size bed, 3 piece bathroom, kitchen and combination dining/sitting area, with electric heat.",
    specialNote: "Pets allowed, perfect for families.",
    href: "/cottages/cottage-6",
    imageSrc: cottage6Exterior,
    imageAlt: "Adventure Cabin for nature lovers.",
    images: [
      cottage6Exterior,
      cottage6Bedrooom1,
      cottage6Mainroom1,
      cottage6Mainroom2,
      cottage6Kitchen1,
      cottage6Bathroom1,
      cottage6Bathroom2,
    ],
    details: {
      bedrooms: 1,
      bathrooms: 1,
      beds: 1,
      guests: 2,
    },
    cottagePrice: {
      perDay: 190,
      perWeek: 925,
      extraPersonDay: 50,
      extraPersonWeek: 210,
    },
    extraFunPrice: {
      BoatNMotorPerHour: 50,
      BoatNMotorPerDay: 100,
      BoatNMotorPerWeek: 250,
      canoePerHour: 25,
      canoePerDay: 50,
      canoePerWeek: 100,
    },
    features: [
      "Fully equipped kitchen",
      "Private deck with BBQ",
      "WiFi",
      "Fireplace",
      "Lake access",
      "Parking",
    ],
    otherDetails:
      "Check-in: 3 PM | Check-out: 11 AM | Free parking available on site.",
  },
  {
    id: "cottage-7",
    title: "Cottage 7",
    description:
      "A 4 bedroom cottage for up to 8 people, with 2 double beds and 2 sets of full twin upper and lower bunks, 3 piece bathroom, kitchen/dining area and a large living room with woodstove.",
    specialNote: "Pets allowed, perfect for families.",
    href: "/cottages/cottage-7",
    imageSrc: cottage7Exterior,
    imageAlt: "Hillside Cottage with panoramic views.",
    images: [
      cottage7Exterior,
      cottage7Bedrooom1,
      cottage7Bedrooom2,
      cottage7Bedrooom3,
      cottage7Mainroom1,
      cottage7Diningroom1,
      cottage7Diningroom2,
      cottage7Bathroom1,
      cottage7Bathroom2,
      cottage7Bathroom3,
    ],
    details: {
      bedrooms: 4,
      bathrooms: 1,
      beds: 6,
      guests: 8,
    },
    cottagePrice: {
      perDay: 285,
      perWeek: 1295,
      extraPersonDay: 50,
      extraPersonWeek: 210,
    },
    extraFunPrice: {
      BoatNMotorPerHour: 50,
      BoatNMotorPerDay: 100,
      BoatNMotorPerWeek: 250,
      canoePerHour: 25,
      canoePerDay: 50,
      canoePerWeek: 100,
    },
    features: [
      "Fully equipped kitchen",
      "Private deck with BBQ",
      "WiFi",
      "Fireplace",
      "Lake access",
      "Parking",
    ],
    otherDetails:
      "Check-in: 3 PM | Check-out: 11 AM | Free parking available on site.",
  },
  {
    id: "cottage-8",
    title: "Cottage 8",
    description:
      "A 5 bedroom cottage, 2 piece bathroom, separate dining area and a fireplace in the living room.",
    specialNote: "Pets allowed, perfect for families.",
    href: "/cottages/cottage-8",
    imageSrc: cottage8Exterior,
    imageAlt: "Lakeview Cottage exterior with lake view.",
    images: [
      cottage8Exterior,
      cottage8Bedroom1,
      cottage8Bedroom2,
      cottage8Bedroom3,
      cottage8Bedroom4,
      cottage8Mainroom1,
      cottage8Mainroom2,
      cottage8Kitchen1,
      cottage8Kitchen2,
      cottage8Upstairs,
    ],
    details: {
      bedrooms: 5,
      bathrooms: 2,
      beds: "-",
      guests: "-",
    },
    cottagePrice: {
      perDay: 425,
      perWeek: 2100,
      extraPersonDay: 50,
      extraPersonWeek: 210,
    },
    extraFunPrice: {
      BoatNMotorPerHour: 50,
      BoatNMotorPerDay: 100,
      BoatNMotorPerWeek: 250,
      canoePerHour: 25,
      canoePerDay: 50,
      canoePerWeek: 100,
    },
    features: [
      "Fully equipped kitchen",
      "Private deck with BBQ",
      "WiFi",
      "Fireplace",
      "Lake access",
      "Parking",
    ],
    otherDetails:
      "Check-in: 3 PM | Check-out: 11 AM | Free parking available on site.",
  },
];
