import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <main>
        {router.pathname != "/signin" ? <Navbar /> : <></>}
        {children}
      </main>
    </div>
  );
};

export default Layout;
