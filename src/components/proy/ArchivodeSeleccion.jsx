import React from "react";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ArchivodeSeleccion() {
  const handleFileSelect = (e) => {
    const fileInput = e.target;
    const files = fileInput.files;
  };

  return (
    <div>
      <label
        className="ml-4 mt-4 block font-semibold text-gray-500 text-ls mb-2"
        htmlFor="grid-password"
      >
        Documentos
      </label>
      <div className="flex flex-col items-center pt-40 pb-32">
        <FontAwesomeIcon
          icon={faFileLines}
          className="text-sky-300 text-4xl mb-2"
        />
        <input
          type="file"
          className="hidden"
          onChange={handleFileSelect}
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          className="bg-sky-800 hover:bg-blue-700 text-white py-2 px-12 text-sm rounded cursor-pointer"
        >
          Seleccionar archivos
        </label>

        <span className="text-sm font-light text-gray-500 rounded-lg mt-2">
          o arrastra y suelta los PDF aquí
        </span>
      </div>
    </div>
  );
}

export default ArchivodeSeleccion;
