import React from "react";
import { checkboxConfig, CarouselOptionsProps } from "../Carousel";

const CarouselOptions: React.FC<CarouselOptionsProps> = ({
  setOptions,
  options,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setOptions((prev) => {
      if (!checked) {
        return { ...prev, [name]: false };
      }

      if (name === "pagination")
        return { ...prev, pagination: true, scrollbar: false };
      if (name === "scrollbar")
        return { ...prev, scrollbar: true, pagination: false };

      return { ...prev, [name]: checked };
    });
  };
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 sm:items-center">
      {checkboxConfig.map(({ key, label }) => (
        <label key={key} className="flex gap-1 items-center">
          <input
            type="checkbox"
            className="peer w-4 h-4"
            name={key}
            checked={options[key]}
            onChange={handleChange}
          />
          {label}
        </label>
      ))}
    </div>
  );
};

export default CarouselOptions;
