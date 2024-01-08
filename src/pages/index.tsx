import AppLayout from "@/layout/AppLayout";
import React from "react";

const Home = () => {
  return (
    <AppLayout>
      <div className="header">
        <a href="/" className="link logo">
          Rushclin Takam
        </a>
        <a href="/" className="link">
          Mes travaux
        </a>
      </div>
    </AppLayout>
  );
};

export default Home;
