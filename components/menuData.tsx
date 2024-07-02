import { Menu } from "../types/menu";

const menuItems: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about1",
    newTab: false,
  },
  {
    id: 3,
    title: "Service",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "IT Training and Staffing",
        path: "/Services/ITTraining",
        newTab: false,
      },
      {
        id: 32,
        title: "Healthcare AI",
        path: "/Services/HealthService",
        newTab: false,
      },
      {
        id: 33,
        title: "Bigdata and ML Solutions",
        path: "/page3",
        newTab: false,
      },
      {
        id: 34,
        title: "Tele Health",
        path: "/page3",
        newTab: false,
      },
      {
        id: 35,
        title: "Genomic Clinical Research",
        path: "/Services/HealthService",
        newTab: false,
      },
      {
        id: 36,
        title: "Web Development",
        path: "/Services/webDevelopment",
        newTab: false,
      },
      {
        id: 36,
        title: "Kids Coding",
        path: "/Services/kidsCoding",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Request Demo",
    path: "/work",
    newTab: false,
  },
  {
    id: 6,
    title: "HomeInsight",
    path: "/property-manager/home-insight",
    newTab: true,
  },
  {
    id: 7,
    title: "EduTech",
    newTab: false,
    submenu: [
      {
        id: 37,
        title: "Courses",
        path: "/Courses",
        newTab: false,
      },
      {
        id: 38,
        title: "Kids Coding",
        path: "/Services/kidsCoding",
        newTab: false,
      },
    ],
  },
];

export default menuItems;
