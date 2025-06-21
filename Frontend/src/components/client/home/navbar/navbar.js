// Logo, Search Bar, DMs, Notifications, Profile
import React, { useState } from "react";
import {
  Button,
  NavbarBrand,
  Navbar,
  Input,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import { RiSearch2Line } from "@remixicon/react";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

const HomeNavbar = () => {
  const [search, setSearch] = useState(false);
  const { user } = useContext(AuthContext);

  const handleSearchToggle = () => {
    setSearch(!search);
  };

  return (
    <Navbar
      maxWidth="xl"
      className="mb-16 rounded-2xl shadow-2xl w-5/6 mx-auto flex justify-between top-5"
    >
           <NavbarBrand className="max-w-fit pr-5 m-5">
             <Image
               src="/slack-salesforce-logo-nav-black.png"
               alt="logo"
               width={105}
               height={45}
             />
           </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Input
            placeholder="Search..."
            startContent={<RiSearch2Line />}
            className={`transition-all duration-300 ${search ? "w-full" : "w-0"}`}
            onFocus={handleSearchToggle}
            onBlur={handleSearchToggle}
          />
        </NavbarItem>
        <NavbarItem>
        </NavbarItem>
        {user && (
          <NavbarItem>
            <Link href="/profile">
              <Button auto>Profile</Button>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}

export default HomeNavbar;