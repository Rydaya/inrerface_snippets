import React from "react";
import { ClickOverlay } from "../shared/ui";
import { Button } from "../shared/ui";

const ClickOverlayPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="heading-page mb-10 lg:mb-5">Click Overlay</h1>
      <div className="lg:py-10 flex flex-col lg:flex-row gap-5 lg:gap-[100px] w-[100%] lg:w-[80%] m-auto items-center justify-center">
        <ClickOverlay
          variant="tooltip"
          content="Tooltip text, Tooltip text, Tooltip text, Tooltip text"
        >
          <Button className="w-[150px]">Hover me</Button>
        </ClickOverlay>

        <ClickOverlay
          variant="popover"
          content={
            <>
              <h4 className="font-semibold">Popover Title</h4>
              <p className="text-sm mb-2">Some interactive content</p>
              <button>Delete</button>
            </>
          }
        >
          <Button className="w-[150px]">Click me</Button>
        </ClickOverlay>
      </div>
    </div>
  );
};

export default ClickOverlayPage;
