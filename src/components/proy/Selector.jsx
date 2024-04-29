import React from "react";

function Selector({texto, Primero, Segundo, Tercero}) {
  return (
    <div className="relative m-4">
      <label
        className="px-2 block font-semibold text-slate-500 text-sm  mb-2"
        htmlFor="grid-password"
      >
        {texto}
      </label>
      <select
        className="px-3 py-2 block appearance-none w-full bg-white border border-gray text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        defaultValue={Primero}
      >
        <option>{Primero}</option>
        <option>{Segundo}</option>
        <option>{Tercero}</option>
      </select>

      <div className="absolute inset-y-0 right-0 flex items-center px-3 py-12 pointer-events-none">
        <svg
          className="h-4 w-4 fill-current text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Selector;
