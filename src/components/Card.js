import React from "react";
import { FcLike } from "react-icons/fc";

const Card = ({ course }) => {
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} />
        <div className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 -bottom-3 grid place-items-center">
          <button>
            <FcLike font-size="1.75rem" />
          </button>
        </div>
      </div>

      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
