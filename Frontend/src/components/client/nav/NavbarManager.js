"use client";

import React from "react";
import { useState } from "react";
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
import NavDropdown from "./partials/NavDropdown";
import Link from "next/link";

const NavbarManager = () => {
  const [search, setSearch] = useState(false);
  const featuresLinks = {
    Collaboration: [
      { header: "Channels", description: "Organize teams and work" },
      { header: "Slack Connect", description: "Work with external partners" },
      { header: "Messaging", description: "Chat with your team" },
      { header: "Huddles", description: "Meet with audio and video" },
      { header: "Clips", description: "Record and share updates" },
    ],
    "Automation & Enterprise": [
      { header: "Workflow Builder", description: "Automate everyday tasks" },
      {
        header: "Apps & Integrations",
        description: "Bring your tools to Slack",
      },
      { header: "Security", description: "Protect data, ensure compliance" },
      {
        header: "Enterprise Key Management",
        description: "Monitor and revoke access",
      },
      {
        header: "Slack Atlas",
        description: "Discover rich profiles and org charts",
      },
    ],
    Knowledge: [
      { header: "Search", description: "Seek shared knowledge" },
      { header: "Canvas", description: "Create rich, flexible docs" },
      {
        header: "File Sharing",
        description: "Bring files to the flow of work",
      },
      { header: "Lists", description: "Organize, track and manage projects" },
    ],
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
      {!search ? (
        <>
          <NavbarContent className="hidden lg:flex gap-4" justify="center">
            <NavbarItem>
              <NavDropdown title="Features" fields={featuresLinks} />
            </NavbarItem>
            <NavbarItem>
              <NavDropdown title="Solutions" fields={featuresLinks} />
            </NavbarItem>
            <NavbarItem>
              <NavDropdown title="Resources" fields={featuresLinks} />
            </NavbarItem>
          </NavbarContent>
          <NavbarContent as="div" className="items-center" justify="end">
            <Button variant="light" onClick={() => setSearch(true)}>
              <RiSearch2Line />
            </Button>
            <Link href="/signin">
              <Button color="secondary" size="md" variant="bordered">
                Sign In
              </Button>
            </Link>
            <Button color="secondary" size="md">
              Get Started
            </Button>
          </NavbarContent>
        </>
      ) : (
        <>
          <NavbarContent as="div" className="items-center" justify="end">
            <Input
              classNames={{
                base: "max-w-full h-10",
                mainWrapper: "h-full",
                input: "text-small hover:text-white",
                inputWrapper:
                  "h-full bg-white font-normal text-default-500 border-b-2 border-black py-1 rounded-none bg-transparent",
              }}
              placeholder="Type to search..."
              size="sm"
              startContent={<RiSearch2Line />}
              type="search"
            />
          </NavbarContent>
          <NavbarContent
            as="div"
            className="items-center w-min"
            justify="center"
          >
            <Button
              color="secondary"
              size="md"
              variant="bordered"
              onClick={() => setSearch(false)}
            >
              Back
            </Button>
            <Button color="secondary" size="md">
              Get Started
            </Button>
          </NavbarContent>
        </>
      )}
    </Navbar>
  );
};

export default NavbarManager;
