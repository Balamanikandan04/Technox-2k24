import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarsCanvas from './components/StarsCanvas';
// import TracingBeamComponent from './components/TracingBeamComponent';
import { IconCalendarEvent, IconHome, IconPhoto } from "@tabler/icons-react";
import { FloatingNav } from "./components/ui/FloatingNavbar";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Events",
    link: "/events",
    icon: (
      <IconCalendarEvent className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "About",
    link: "/about",
    icon: <IconPhoto className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Register",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSd0VZM5Z-dq3FdAzyJW71xXDKUa8xvpdv34gA2tTgIKTXjpAg/viewform?usp=sf_link",
    icon: <IconPhoto className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
 
  // {
  //   name: "Workshop",
  //   link: "/workshop",
  //   icon: <IconLetterW className="h-4 w-4 text-neutral-500 dark:text-white" />,
  // },
  // {
  //   name: "Sponsors",
  //   link: "/sponsors",
  //   icon: <IconDiscountCheck className="h-4 w-4 text-neutral-500 dark:text-white" />,
  // },
  // {
  //   name: "Our Team",
  //   link: "/our-team",
  //   icon: <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
  // },
];

const App: FC = () => {
  return (
    <>
      <Navbar />
      <FloatingNav navItems={navItems} />
      <Outlet />
      <StarsCanvas/>
      {/* <TracingBeamComponent/> */}
      <Footer />
    </>
  );
}

export default App;