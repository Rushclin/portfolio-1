"use-client";
import { NextPage } from "next";
import "./../styles/globals.css";

import React from "react";
import Script from "next/script";

interface AppProps {
  Component: NextPage;
}

const App: React.FC<AppProps> = ({ Component }: AppProps) => {
  const { defaultProps } = Component;

  React.useEffect(() => {
    // @ts-ignore
    import("preline");
  }, []);

  return (
    <>
      <Component {...defaultProps} />
      <Script src="./js/script.js" />
    </>
  );
};

export default App;
