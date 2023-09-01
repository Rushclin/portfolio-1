import { TagObj } from "@/data/experiences";
import React from "react";

const Tag: React.FC<TagObj> = ({ color, id, title }) => {
  return (
    <div
      className={`text-xs inline-flex items-center font-bold leading-sm px-3 py-1 ${color} text-blue-700 rounded-full mr-2 mb-2`}
    >
      {title}
    </div>
  );
};

export default Tag;
