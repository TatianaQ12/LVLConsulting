import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import InputText from "./InputText";
import datosModal from "../../data/datosModal";

function ButtonModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="px-16 py-2 bg-blue-900 text-white rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FontAwesomeIcon icon={faSave} className="pr-2"></FontAwesomeIcon>
        Guardar
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div class="relative w-full max-w-xl max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-2 md:p-2 ml-2 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-lg font-bold text-blue-900 ">
                    Formulario de contacto
                  </h3>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>

                <form class="p-4 md:p-5">
                  <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                      <InputText
                        texto={"Nombre de formulario"}
                        placeholder={"Introducir nombre del formulario"}
                        type={"text"}
                      ></InputText>
                      <h5 className="text-black text-sm font-bold">
                        Administrador
                      </h5>
                      <span className="text-sm font-light pr-6 text-gray-500 rounded-lg ">
                        Seleccione los campos que desea incluir en el formulario
                        de contacto.
                      </span>
                      <table className="min-w-full">
                        <thead className="text-sm text-gray-900 tracking-wider">
                          <tr>
                            <th scope="col" className="px-1 py-3 text-left">
                              Campo
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                              Mostrar
                            </th>
                            <th scope="col" className="px-6 py-3 text-right">
                              Obligatorio
                            </th>
                          </tr>
                        </thead>

                        <tbody className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {datosModal.map((dato, index) => (
                            <tr key={index}>
                              <td>{dato.nombre}</td>
                              <td className="px-6 py-3 text-center">
                                <input
                                  type="checkbox"
                                  className="mt-1 h-4 w-4"
                                />
                              </td>
                              <td className="px-6 py-3 text-right">
                                <input
                                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                                  type="checkbox"
                                  role="switch"
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <InputText
                        texto={"Mensaje de agradecimiento"}
                        placeholder={"¡Gracias!"}
                        type={"text"}
                      ></InputText>

                      <div className="flex justify-between">
                        <div className="flex justify-start items-center mb-4">
                          <label
                            for="description"
                            class="block mb-2 text-sm font-bold text-gray-500 dark:text-white"
                          >
                            Términos y condiciones personalizados
                          </label>
                        </div>
                        <div className="flex justify-end items-center mb-4">
                          <input
                            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                      <input
                        placeholder="https:// Añadir enlace"
                        type="text"
                        className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none w-full"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-6">
                      <button
                        className="bg-sky-800 hover:bg-blue-700 text-white py-2 px-20 text-sm rounded"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Crear formulario
                      </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ButtonModal;
