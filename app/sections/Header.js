"use client";

import NavbarComponent from "@app/components/NavbarComponent";
import { useEffect } from "react";



const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      scrollFunction();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("stickyNavbar").style = "position:fixed; width: 100%; top:0; background: white; display:block; transition: 0.6s; z-index: 10;"
    } else {
      document.getElementById("stickyNavbar").style = "top:-100px; transition: 0.6s;";
    }
  }

  return (
  <>
    <NavbarComponent
      headerStyles="bg-[#F6F8FB]"
    />

    <div aria-hidden="true" >
      <NavbarComponent
        headerId="stickyNavbar"
        headerStyles="bg-white shadow fixed w-full block top-[-100px]"
      />
    </div>
  </>
)
  }

export default Header