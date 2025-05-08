"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import "../styles/global.css";
import Providers from "@/app/providers";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
