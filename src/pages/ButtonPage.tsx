import React from "react";
import { Button } from "../shared/ui";
import { Arrow } from "../shared/assets/icons";

const ButtonPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="heading-page mb-10">Buttons</h1>
      <div className="m-auto grid grid-cols-3 gap-8">
        <Button className="w-[150px] m-auto" variant="primary">
          Primary
        </Button>
        <Button className="w-[150px] m-auto" variant="secondary">
          Secondary
        </Button>
        <Button className="w-[150px] m-auto" variant="outline">
          Outline
        </Button>
        <Button className="w-[150px] m-auto" variant="disabled">
          Disabled
        </Button>
        <Button
          className="w-[150px] m-auto"
          variant="primary"
          icon={<Arrow direction="right" />}
        >
          Icon
        </Button>
        <Button className="w-[150px] m-auto" variant="link">
          Link
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
