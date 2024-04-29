import React from "react";

function LineaProgress() {
  return (
    <div
      className="bg-white shadow-md p-6 mr-8"
      style={{ width: "auto", height: "auto", boxSizing: "border-box" }}
    >
      <span className="font-semibold text-xl text-gray-700">1024</span>
      <h2 className="text-gray-600 text-ls">Referidos</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "78%" }}></div>
      </div>

      <span className="font-semibold text-xl text-gray-700">1024</span>
      <h2 className="text-gray-600 text-ls">Referidos</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
          style={{ width: "78%" }}
        ></div>
      </div>
    </div>
  );
}

export default LineaProgress;
