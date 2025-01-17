import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  // in this you have no track which things you liked and which you don't
  // so can't use in future
  // const [liked, setLiked] = useState(false);
  // function clickHandler() {
  //   if (liked === false) {
  //     toast.success("like added");
  //     setLiked(true);
  //   } else {
  //     toast.warning("like removed");
  //     setLiked(false);
  //   }
  // }

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      //already liked
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} />
        <div className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 -bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike font-size="1.75rem" />
            ) : (
              <FcLikePlaceholder font-size="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substring(0, 100) + "...."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
