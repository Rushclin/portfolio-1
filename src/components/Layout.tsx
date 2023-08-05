import React, { ReactNode } from "react";
import Header from "./Header";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`RUSHCLIN TAKAM • ${pageTitle}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div className="container mx-auto">{children}</div>
    </>
  );
};

export default Layout;
