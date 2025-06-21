import React from "react";
// import NavbarManager from "../client/nav/NavbarManager";
import NavbarManager from "../client/nav/NavbarManager";
import HomeNavbar from "../client/home/navbar/navbar";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";


const Nav = () => {
  const { user } = useContext(AuthContext);
  // Check if the user is authenticated
  if (!user) {
    // If not authenticated, return the HomeNavbar
    return <HomeNavbar />;
  }
  
  // If authenticated, return the NavbarManager
  return <NavbarManager />;
};

export default Nav;
