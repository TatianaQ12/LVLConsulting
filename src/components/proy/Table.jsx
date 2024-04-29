import React from "react";
import datosTabla from "../../data/datosTabla";
import {
  faFilter,
  faPlus,
  faPencil,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function TablaPryecto() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex justify-start items-center mb-4">
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              defaultValue="10"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
          <span className="ml-2 text-gray-700">Datos por página</span>
        </div>
        <div className="flex justify-end items-center mb-4">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-white text-blue-900 border rounded-md">
              <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
              Filtrar
            </button>
            <button className="px-4 py-2 bg-blue-900 text-white rounded-md" 
           onClick={() => navigate("/webpage/formulario")}
            >
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              Agregar categoría
            </button>
          </div>
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            ></th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              N°
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Categoría
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Descripción
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Fecha
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Categoría
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {datosTabla.map((dato, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input type="checkbox" id="task" className="mr-2" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dato.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="font-semibold text-ls text-gray-700">
                  {dato.nombre}
                </span>
                <h2 className="text-gray-600 text-ls">{dato.nombre}</h2>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dato.descripcion}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dato.fecha}
              </td>
              <td className={`mt-4 py-1 px-2 text-sm font-semibold ${dato.colors} rounded-full flex items-center justify-center`}>
                {dato.categoria}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                <FontAwesomeIcon icon={faEye} className="mr-2 ml-2" />
                <FontAwesomeIcon icon={faTrash} className="ml-2" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm leading-5 text-gray-700">
          Mostrando 1 a 10 de 19 datos
        </div>
      </div>
    </div>
  );
}

export default TablaPryecto;
