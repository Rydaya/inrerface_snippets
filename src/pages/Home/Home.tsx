import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full px-4 relative">
      <div className="flex flex-col justify-center items-center gap-4 max-w-4xl text-center">
        <p className="font-gothic font-bold text-bg-accent text-3xl">
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

export default Home;
