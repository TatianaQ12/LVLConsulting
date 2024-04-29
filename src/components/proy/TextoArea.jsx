import React from "react";


function TextoArea({texto}) {
  return (
    <div className="relative m-4">
      <label
        className="px-2 block font-semibold text-slate-500 text-sm  mb-2"
        htmlFor="grid-password"
      >
        {texto}
      </label>

       <textarea
        className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none w-full"
        placeholder="Escribe aquí..."
    />
      
    </div>
  );
}
export default TextoArea;
