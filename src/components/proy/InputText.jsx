import React from "react";


function InputText({ texto, placeholder,type }) {
  return (
    <div className="relative w-full mb-3">
      <label
        className="block font-semibold text-slate-500 text-sm  mb-2"
        htmlFor="grid-password"
      >
        {texto}
      </label>
      <input
        type={type}
        className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none w-full"
        placeholder={placeholder}
      />
    </div>
  );
}
export default InputText;
