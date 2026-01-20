import React from "react";
const testBar = ["test", "test1", "test2"];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg p-4 flex flex-col gap-3">
      <h2 className="font-gothic font-bold text-lg mb-4">Snippets</h2>
      {testBar.map((item) => (
        <p
          key={`${item}`}
          className="px-3 py-2 rounded hover:bg-gray-100 transition"
        >
          {item}
        </p>
      ))}
    </div>
  );
}
