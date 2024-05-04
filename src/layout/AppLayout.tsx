import { app } from "@/config/app";
import Head from "next/head";
import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{title ?? app.fullName + " " + app.description}</title>
      </Head>
      <div className="container">{children}</div>
    </>
  );
};

export default AppLayout;
