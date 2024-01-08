"use-client";
import { NextPage } from "next";
import React from "react";
import Script from "next/script";

import "./../styles/globals.css";

interface AppProps {
  Component: NextPage;
}

const App: React.FC<AppProps> = ({ Component }: AppProps) => {
  const { defaultProps } = Component;

  return (
    <>
      <Component {...defaultProps} />
      <Script src="./js/script.js" />
    </>
  );
};

export default App;
