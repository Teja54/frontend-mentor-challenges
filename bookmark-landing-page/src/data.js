import React from "react";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "features",
  },
  {
    id: 2,
    url: "/",
    text: "pricing",
  },
  {
    id: 3,
    url: "/",
    text: "contact",
  },
  {
    id: 4,
    url: "/",
    text: "login",
    classname: "login",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <GrFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
];

const tabs = [
  {
    id: 1,
    url: "https://res.cloudinary.com/teja54/image/upload/v1623308232/illustration-features-tab-1_jhbrel.svg",
    title: "simple bookmarking",
    heading: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/teja54/image/upload/v1623308233/illustration-features-tab-2_ex7wci.svg",
    title: "Speedy Searching",
    heading: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/teja54/image/upload/v1623308232/illustration-features-tab-3_mwcc1q.svg",
    title: "Easy Sharing",
    heading: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];
export default tabs;

export const extensions = [
  {
    id: 1,
    url: "https://res.cloudinary.com/teja54/image/upload/v1623308233/logo-chrome_qjof1h.svg",
    name: "Add to Chrome",
    version: "minimum version 62",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/teja54/image/upload/v1623308234/logo-firefox_mhg7yr.svg",
    name: "Add to Firebox",
    version: "minimum version 55",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/teja54/image/upload/v1623308234/logo-opera_um5xgu.svg",
    name: "Add to Opera",
    version: "minimum version 46",
  },
];

export const qA = [
  {
    id: 1,
    title: "What is Bookmark?",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    title: "How can I request a new browser?",
    info: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    title: "Is there a mobile app?",
    info: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    title: "What about other Chromium browsers?",
    info: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];
