import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full px-4 relative p-6">
      <div className="flex flex-col justify-center items-center gap-3 max-w-4xl text-center">
        <p className="heading-page">
          Welcome to My Interface Components Pet Project
        </p>
        <p className="font-semibold text-lg">
          This is my pet project where I showcase core web page elements that I
          design and build myself. Feel free to explore the sidebar on the right
          and select any element you’re interested in to see its implementation
          and details.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
