import React from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../../components/proy/InputText";

function LoginIndex() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative  bg-cover bg-no-repeat p-12 bg-[url('src/img/fondo.png')]">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="bg-white relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="bg-white rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-sky-800 text-sm font-bold">
                      Crear cuenta
                    </h6>
                    <h7 className="text-gray-500 text-sm">
                      Únete a la comunidad de LVL Consulting
                    </h7> 
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form>
                    <InputText
                      texto={"Correo electrónico"}
                      placeholder={
                        "Introducir la dirección del correo electrónico"
                      }
                      type={"Email"}
                    ></InputText>
                    <InputText
                      texto={"Nombre del usuario"}
                      placeholder={"Introducir nombre del usuario"}
                      type={"Text"}
                    ></InputText>
                    <InputText
                      texto={"Contraseña"}
                      placeholder={"Introducir la contraseña"}
                      type={"Password"}
                    ></InputText>

                    <h7 className="text-gray-500 text-sm">
                      Al registrarte aceptas los{" "}
                      <u className="text-sky-800">
                        Términos de uso de LVL Consulting
                      </u>
                    </h7>

                    <div className="text-center mt-6">
                      <button
                        className="bg-sky-800 hover:bg-blue-700 text-white py-2 px-20 text-sm rounded"
                        type="button"
                        onClick={() => navigate("/Dashboard")}
                      >
                        Agregar categoria
                      </button>
                    </div>

                    <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                      <p class="mx-4 mb-0 text-center text-gray-500 text-sm">
                        Crear cuenta con
                      </p>
                    </div>

                    <div className="space-x-8 flex justify-center">
                      <button type="button" class="border-none outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          class="inline"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#fbbd00"
                            d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                            data-original="#fbbd00"
                          />
                          <path
                            fill="#0f9d58"
                            d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                            data-original="#0f9d58"
                          />
                          <path
                            fill="#31aa52"
                            d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                            data-original="#31aa52"
                          />
                          <path
                            fill="#3c79e6"
                            d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                            data-original="#3c79e6"
                          />
                          <path
                            fill="#cf2d48"
                            d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                            data-original="#cf2d48"
                          />
                          <path
                            fill="#eb4132"
                            d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                            data-original="#eb4132"
                          />
                        </svg>
                      </button>
                      <button type="button" class="border-none outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          fill="#007bff"
                          viewBox="0 0 167.657 167.657"
                        >
                          <path
                            d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                            data-original="#010002"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginIndex;
