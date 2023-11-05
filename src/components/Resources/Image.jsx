/* eslint-disable react/display-name */
import { forwardRef } from "react";
import Checkbox from "../Sections/Checkbox";

export const Image = forwardRef(
  ({ position, url, index, handleCheck, isCheck, ...props }, ref) => {
    const isChecked = isCheck && Array.isArray(isCheck) && (position ? isCheck.includes(position) : isCheck.includes(0));
    const isLargeImage = index === 0;

    return (
      <div className={`${isLargeImage ? "col-span-2 row-span-2" : "col-span-1 h-[142px]"} relative`}>
        <Checkbox
          id={index}
          name={url}
          handleClick={() => handleCheck(position)}
          isChecked={isChecked}
        />
        <img
          src={url}
          alt={`Image ${index + 1}`}
          className={`${isLargeImage ? "h-[300px]" : "h-[142px]"} w-full border rounded-md bg-gray-50 hover:brightness-90 object-cover`}
          ref={ref}
          {...props}
          onClick={() => handleCheck(position)}
        />
      </div>
    );
  }
);
