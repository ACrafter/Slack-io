import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import React, { useState } from "react";
import NavDropdownItem from "./NavDropdownItem";

function NavDropdown(props) {
  const [show, setShow] = useState(false);

  return (
    <Dropdown onOpenChange={() => setShow(!show)}>
      <DropdownTrigger>
        <Button
          color="default"
          variant="light"
          className="font-semibold text-md"
        >
          {props.title}{" "}
          {show ? (
            <RiArrowUpSLine className="font-light mt-1 w-[20px]" />
          ) : (
            <RiArrowDownSLine className="font-light mt-1 w-[20px]" />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown Variants"
        color="default"
        variant="light"
      >
        <DropdownItem>
          <div className="flex flex-row space-x-8">
            {Object.entries(props.fields).map((item, index) => (
              <NavDropdownItem key={index} links={item} />
            ))}
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default NavDropdown;
