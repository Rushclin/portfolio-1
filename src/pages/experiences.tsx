import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import { experiences } from "@/data/experiences";
import React from "react";
import localFont from "next/font/local";

const abrilFactface = localFont({
  src: "./../../public/fonts/AbrilFatface-Regular.woff",
});

const Experiences = () => {
  return (
    <Layout pageTitle="Experiences">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-1 gap-12">
          <div className="text-center pb-5">
            <h2
              className={`text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white ${abrilFactface.className}`}
            >
              Discover My Experiences
            </h2>
            <p className="mt-3 text-gray-800 dark:text-gray-400">
              Development of basic applications, web and mobile applications and
              responsive websites. <br /> Team work and under pressure.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500">
              Contact me
              <svg
                className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {experiences.map((experience, index) => (
              <Experience experience={experience} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experiences;
