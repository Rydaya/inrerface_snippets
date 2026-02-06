import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import Button from "../Button";
import clsx from "clsx";

const Error: React.FC<{ className?: string }> = ({ className }) => {
  const homePath = useSelector((state: RootState) =>
    state.nav.items.find((item) => item.title === "Home"),
  );

  return (
    <div
      className={clsx(
        "flex flex-col gap-3 items-center justify-center m-auto w-[50%] h-full text-center",
        className,
      )}
    >
      <p className="font-gothic text-text-header text-8xl pb-6">Oops!</p>
      <p className="font-bold text-3xl">404 - Page not found!</p>
      <p className="pb-6">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      {homePath && (
        <Button
          className="w-[50%]"
          type="navLink"
          variant="primary"
          data={homePath}
        >
          {homePath.title}
        </Button>
      )}
    </div>
  );
};

export default Error;
