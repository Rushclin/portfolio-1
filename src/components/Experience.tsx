import { ExperienceObj } from "@/data/experiences";
import React from "react";
import localFont from "next/font/local";
import Tag from "./Tag";

interface ExperienceProps {
  experience: ExperienceObj;
}

const abrilFactface = localFont({
  src: "./../../public/fonts/AbrilFatface-Regular.woff",
});

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="flex border p-5 rounded-lg">
      <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
        </svg>
      </span>
      <div className="ml-5 sm:ml-8">
        <h3
          className={`text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 ${abrilFactface.className}`}
        >
          {experience.title}
        </h3>
        <h6 className="text-xs italic">
          {new Date(experience.degin).toDateString()} -{" "}
          {typeof experience.end == "string"
            ? experience.end
            : new Date(experience.end).toDateString()}
          , <span className="font-semibold">{experience.poste}</span>
        </h6>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          {experience.descrption}
        </p>

        <div className="mt-4">
          {experience.tags?.length &&
            experience.tags.map((tag, index) => (
              <Tag
                color={tag.color}
                id={tag.id}
                title={tag.title}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
