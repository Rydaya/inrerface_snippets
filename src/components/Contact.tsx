import React from "react";
import MyPhoto from "../assets/images/foto.jpg";

const Contact: React.FC = () => {
  return (
    <div className="my-4 border-y border-accent border-dotted py-4 w-full flex items-center justify-center gap-3">
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex items-center">
        <img src={MyPhoto} alt="Person foto" />
      </div>
      <div className="flex flex-col text-base">
        <p className="font-semibold">Kseniia Zaitseva</p>
        <p className="text-xs">rydaya97@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
