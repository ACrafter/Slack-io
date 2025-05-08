import { DropdownItem, Link } from "@nextui-org/react";
import React from "react";

function NavDropdownItem(props) {
  return (
    <div>
      <h2 className="text-xl my-3 ">{props.links[0]}</h2>
      <div className="flex flex-col space-y-5">
        {props.links[1].map((item, index) => (
          <a
            key={index}
            href={item.to}
            className="group text-gray-400 [&_h3]:text-black [&_h3]:hover:underline [&_h3]:hover:text-blue-600 hover:text-blue-600"
          >
            <div>
              <h3>{item.header}</h3>
              <p>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavDropdownItem;
