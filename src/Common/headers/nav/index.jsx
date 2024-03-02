"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import "./style.css";

const links = [
  {
    title: "HOME",
    href: "/Home",
  },
  {
    title: "About Us",
    href: "/AboutUs",
  },
  {
    title: "Online Consultancy",
    href: "/Consultancy",
  },
  {
    title: "PROJECTS",
    href: "/Projects",
  },
  {
    title: "TEAM",
    href: "/Team",
  },
  {
    title: "HOW WE WORK",
    href: "/HowWeWork",
  },
  {
    title: "SERVICES",
    href: "/Services",
  },
  {
    title: "CONTACT",
    href: "/ContactUs",
  }

]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className="nav">
      <div className="wrapper">
        <div className="container">
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
    
      </div>
    </motion.div>
  )
}