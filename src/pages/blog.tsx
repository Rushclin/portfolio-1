import Layout from "@/components/Layout";
import React from "react";
import localFont from "next/font/local";

const abrilFactface = localFont({
  src: "./../../public/fonts/AbrilFatface-Regular.woff",
});

const Blog = () => {
  return (
    <Layout pageTitle="Blog">
      <div className="min-h-[calc(100vh-8rem)] w-full flex justify-center items-center content-center">
        <h1
          className={`md:text-7xl sm:text-5xl text-3xl heading ${abrilFactface.className}`}
        >
          Comming soon
        </h1>
      </div>
    </Layout>
  );
};

export default Blog;
