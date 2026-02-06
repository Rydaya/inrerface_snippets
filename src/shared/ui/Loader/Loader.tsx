import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Loader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={twMerge(
        clsx(
          "relative top-0 right-0 h-full w-full bg-loader-bg flex flex-col gap-3 justify-center items-center z-100",
          className,
        ),
      )}
    >
      <div className="w-[50px] h-[50px] border-[5px] border-solid border-loader-active border-t-loader-muted rounded-[50%] animate-spin"></div>
      <p className="font-bold text-loader-active">Loading</p>
    </div>
  );
};

export default Loader;
