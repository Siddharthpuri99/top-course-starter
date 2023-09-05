import React from "react";
// import {FcLike} from "react-icons"
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
// import { toast } from 'react-toastify/dist/types';
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;
  let liked = props.liked;
  let setliked = props.setliked;

  function clickHandler() {
    if (liked.includes(course.id)) {
      setliked((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("liked removed");
    } else {
      if (liked.length === 0) {
        setliked([course.id]);
      } else {
        setliked((prev) => [...prev, course.id]);
      }
      toast.success("liked successfully");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="" />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
          {

            !liked.includes(course.id)?(
            <FcLikePlaceholder  fontSize="1.75rem" />
            ):(
            <FcLike  fontSize="1.75rem" />)
          }
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
            {
                course.description.length>100?(course.description.substr(0,100)+".."):(course.description)
            }
        </p>
      </div>
    </div>
  );
}

export default Card;
