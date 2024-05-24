import {
  alterationSVG,
  callSVG,
  cleaningSVG,
  clockSVG,
  gpsSVG,
  listSVG,
  parkingSVG,
  servicesSVG,
  shirtSVG,
} from "@/lib/svgData";

export const list = [
  {
    title: "Services",
    desc: "Explore the comprehensive range of services we proudly offer to cater to all your cleaning needs.",
    link: `/service`,
    svg: servicesSVG,
  },
  {
    title: "Alteration",
    desc: "Need a perfect fit? Visit our fitting room for professional alteration services tailored to you.",
    link: `/service?q=alterations`,
    svg: alterationSVG,
  },
  {
    title: "Cleaning",
    desc: "Click to learn more about our exceptional laundry and dry cleaning services.",
    link: `/service?q=laundry`,
    svg: cleaningSVG,
  },
  {
    title: "Drop-off",
    desc: "Find out the easy and convenient ways to drop off your clothes at Spotless Cleaners.",
    link: `/service#steps`,
    svg: shirtSVG,
  },
  {
    title: "Parking",
    desc: "Click to learn more about our free, convenient parking.",
    link: `/location#parking`,
    svg: parkingSVG,
  },
  {
    title: "Location",
    desc: "Click to find our Spotless Cleaners at Sewell, NJ location and get directions.",
    link: `/location#address`,
    svg: gpsSVG,
  },
  {
    title: "Open Hours",
    desc: "Check our operating hours and plan your visit to fit your schedule.",
    link: `/location#contact`,
    svg: clockSVG,
  },
  {
    title: "About Us",
    desc: "Get to know more about Spotless Cleaners and our unwavering commitment to quality service.",
    link: `/about-us`,
    svg: listSVG,
  },
  {
    title: "Contact",
    desc: "Click to find out how to get in touch with us for any inquiries or assistance.",
    link: `/location#contact`,
    svg: callSVG,
  },
];
