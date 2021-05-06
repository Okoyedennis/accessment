import {
  DesktopWindows,
  Event,
  Language,
  LocalShipping,
} from "@material-ui/icons";

export const menuItem = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
];

export const homeItem1 = [
  {
    icon: <Event />,
    title: "Contract logistics",
    text:
      "Need custom logistic service? We got it covered. From overland, air, rail and sea transportation. Fast, safe and accurate shipment provided all over the globe.",
  },
  {
    icon: <Language />,
    title: "Overland, Ocean and Air Freight",
    text:
      "Trucking company offers the best logistics services using all mens of supply chain. Use our overland, ocean and air freight solutions for shipment of your goods",
  },
];

export const homeItem2 = [
  {
    icon: <LocalShipping />,
    title: "Warehousing and Storage",
    text:
      "Trucking offers intelligent warehouse solution. Lower your storage and good maintenance by using our modern and intelligent warehouses. You can see all locations on location page.",
  },
  {
    icon: <DesktopWindows />,
    title: "Consulting Services",
    text:
      "Don't know what mean of transportation would be right for you, or you need someone for full supply chain management? Please contact us. Our team of professionals will be happy to help",
  },
];
