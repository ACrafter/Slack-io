import Header from "@/components/client/signin/header";
import Image from "next/image";
import { useState } from "react";
import Body from "@/components/client/signin/body";

function Signin() {
  // State to manage the type of sign-in (passwordless, workspace, or phone)
  const [type, setType] = useState("default");

  return (
    <>
      <header className="pt-12 pb-10 flex justify-center">
        <Image
          src="/slack_logo-ebd02d1.svg"
          alt="logo"
          width={102}
          height={26}
        />
      </header>

      <div className="flex flex-col mx-auto w-2/4 items-center">
        <Header type={type} />
        <Body type={type} fn={setType} />
      </div>
    </>
  );
}

export default Signin;
