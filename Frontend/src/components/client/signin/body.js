"use client";

import CustomButton from "@/components/common/CustomButton";
import { Input } from "@nextui-org/react";
import { RiSparklingLine } from "@remixicon/react";
import { useState } from "react";

function Body({ type, fn }) {
  const useState = [];

  let body;
  if (type === "default") {
    body = (
      <div className="flex flex-col w-3/6 mt-8 space-y-4">
        <CustomButton
          variant="bordered"
          text="Sign In With Google"
          icon=<svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5 mr-2 c-third_party_auth__icon"
          >
            <g>
              <path
                className="c-third_party_auth__icon__google--red"
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              ></path>
              <path
                className="c-third_party_auth__icon__google--blue"
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              ></path>
              <path
                className="c-third_party_auth__icon__google--yellow"
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              ></path>
              <path
                className="c-third_party_auth__icon__google--green"
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              ></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </g>
          </svg>
        />
        <CustomButton
          variant="bordered"
          text="Sign In With Apple"
          icon=<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-5 h-5 mr-2 c-third_party_auth__icon"
          >
            <path
              d="M10.16 -2.38419e-07C7.8 0.56 6.9 2.1 6.86 4.14C7.76 4.06 8.27 3.96 8.99 3.23C9.84 2.37 10.22 1.26 10.22 0.43C10.22 0.219999 10.2 0.129999 10.16 -2.38419e-07ZM10.33 3.84C9.86 3.84 9.28 3.95 8.59 4.19C7.94 4.42 7.46 4.54 7.16 4.54C6.92 4.54 6.46 4.43 5.77 4.23C5.07 4.03 4.47 3.92 3.99 3.92C1.69 3.92 1.19209e-07 6.11 1.19209e-07 9.22C1.19209e-07 10.86 0.49 12.58 1.48 14.35C2.47 16.12 3.49 17 4.5 17C4.84 17 5.29 16.89 5.83 16.65C6.36 16.41 6.84 16.32 7.26 16.32C7.69 16.32 8.2 16.43 8.77 16.64C9.39 16.87 9.85 17 10.18 17C11.9 17 13.48 14.12 14 12.41C12.8 12.05 11.72 10.53 11.72 8.85C11.72 7.3 12.46 6.44 13.52 5.53C12.82 4.66 11.93 3.84 10.33 3.84Z"
              fill="#1D1C1D"
            ></path>
          </svg>
        />
        <div className="relative flex items-center justify-center my-4">
          <hr className="absolute w-full border-gray-300 -z-10" />
          <p className="text-center bg-white px-4 text-gray-500 text-md z-1">
            OR
          </p>
        </div>
        <Input placeholder="name@work-email.com" name="email" />
        <CustomButton variant="solid" text="Sign In With Email" />
        <div className="bg-gray-200 text-gray-500 p-5 flex space-x-3 rounded-xl">
          <i>
            <RiSparklingLine />
          </i>
          <p className="text-xs">
            We’ll email you a magic code for a password-free sign in. Or you can{" "}
            <span
              className="text-blue-500 hover:cursor-pointer"
              onClick={() => {
                fn("workspace");
              }}
            >
              sign in to workspace instead.
            </span>
          </p>
        </div>
      </div>
    );
  } else if (type === "workspace") {
    body = (
      <div className="flex flex-col w-3/6 mt-8 space-y-4">
        <Input placeholder="your-workspace.slack.com" />
        <CustomButton variant="solid" text="Continue" />
        <div>
          <p className="text-xs text-gray-600 my-4">
            Don't know your workspace URL?{" "}
            <span
              className="text-blue-500 hover:cursor-pointer"
              onClick={() => {
                fn("team");
              }}
            >
              Find your workspaces
            </span>
          </p>
          <p className="text-xs text-gray-600">
            Looking to create a new workspace?{" "}
            <span
              className="text-blue-500 hover:cursor-pointer"
              onClick={() => {
                fn("new");
              }}
            >
              Create a new workspace
            </span>
          </p>
        </div>
      </div>
    );
  } else if (type === "team" || type === "new") {
    body = (
      <div className="flex flex-col w-3/6 mt-8 space-y-4">
        <CustomButton
          variant="bordered"
          text="Sign In With Google"
          icon=<svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5 mr-2 c-third_party_auth__icon"
          >
            <g>
              <path
                className="c-third_party_auth__icon__google--red"
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              ></path>
              <path
                className="c-third_party_auth__icon__google--blue"
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              ></path>
              <path
                className="c-third_party_auth__icon__google--yellow"
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              ></path>
              <path
                className="c-third_party_auth__icon__google--green"
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              ></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </g>
          </svg>
        />
        <CustomButton
          variant="bordered"
          text="Sign In With Apple"
          icon=<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-5 h-5 mr-2 c-third_party_auth__icon"
          >
            <path
              d="M10.16 -2.38419e-07C7.8 0.56 6.9 2.1 6.86 4.14C7.76 4.06 8.27 3.96 8.99 3.23C9.84 2.37 10.22 1.26 10.22 0.43C10.22 0.219999 10.2 0.129999 10.16 -2.38419e-07ZM10.33 3.84C9.86 3.84 9.28 3.95 8.59 4.19C7.94 4.42 7.46 4.54 7.16 4.54C6.92 4.54 6.46 4.43 5.77 4.23C5.07 4.03 4.47 3.92 3.99 3.92C1.69 3.92 1.19209e-07 6.11 1.19209e-07 9.22C1.19209e-07 10.86 0.49 12.58 1.48 14.35C2.47 16.12 3.49 17 4.5 17C4.84 17 5.29 16.89 5.83 16.65C6.36 16.41 6.84 16.32 7.26 16.32C7.69 16.32 8.2 16.43 8.77 16.64C9.39 16.87 9.85 17 10.18 17C11.9 17 13.48 14.12 14 12.41C12.8 12.05 11.72 10.53 11.72 8.85C11.72 7.3 12.46 6.44 13.52 5.53C12.82 4.66 11.93 3.84 10.33 3.84Z"
              fill="#1D1C1D"
            ></path>
          </svg>
        />
        <div className="relative flex items-center justify-center my-4">
          <hr className="absolute w-full border-gray-300 -z-10" />
          <p className="text-center bg-white px-4 text-gray-500 text-md z-1">
            OR
          </p>
        </div>
        <Input placeholder="name@work-email.com" />
        <CustomButton variant="solid" text="Continue" />
      </div>
    );
  }

  return body;
}

export default Body;
