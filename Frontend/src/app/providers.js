import { AuthProvider } from "@/contexts/AuthContext";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

function Providers({ children }) {
  return  <NextUIProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </NextUIProvider>;
}

export default Providers;
