import React from "react";
import Navbar from "../components/Navbar/Index.jsx";
import Title from "../components/Title/Title.jsx";
import { useOutletContext } from "react-router-dom";
import InputText from "../components/proy/InputText.jsx";
import Selector from "../components/proy/Selector.jsx";
import TextoArea from "../components/proy/TextoArea.jsx";
import ArchivodeSeleccion from "../components/proy/ArchivodeSeleccion.jsx";
import ButtonModal from "../components/proy/ButtonModal.jsx";

function Form() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />
        <div className="mainCard">
          <div className="flex justify-between">
            <div className="flex flex-col mb-4">
              <Title text={"Nuevo formulario"} />
              <span className="text-sm font-light text-gray-500 rounded-lg">
                Complete sus datos y continúe con los siguientes pasos.
              </span>
            </div>

              <div className="flex justify-end items-center mb-4">
                <ButtonModal></ButtonModal>
              </div>
          </div>

          <div className="flex mt-4">
            <div className="flex-1 border border-gray-200 bg-white rounded-md mr-4">
              <div className="flex m-2">
                <div className="flex-1 m-2">
                  <InputText
                    texto={"Nombre de categoría"}
                    placeholder={"Introducir la categoría"}
                    type={"text"}
                  />
                </div>
                <div className="flex-1 m-2">
                  <InputText
                    texto={"Nombre de categoría"}
                    placeholder={"Introducir la categoría"}
                    type={"text"}
                  />
                </div>
              </div>

              <Selector
                texto={"Empresa"}
                Primero={"Seleccione una opcion"}
                Segundo={"LVL Consulting"}
                Tercero={"UNJFSC"}
              ></Selector>
              <Selector
                texto={"Tipo de empresa"}
                Primero={"Seleccione una opcion"}
                Segundo={"Personal"}
                Tercero={"Startup"}
              ></Selector>
              <Selector
                texto={"Tipo de empresa"}
                Primero={"Seleccione una opcion"}
                Segundo={"Personal"}
                Tercero={"Startup"}
              ></Selector>

              <TextoArea texto={"Descripción"}></TextoArea>
            </div>

            <div className="flex-1 border border-gray-200 rounded-md bg-sky-50">
              <ArchivodeSeleccion />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Form;
