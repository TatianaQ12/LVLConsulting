import {
  faBars,
  faBell,
  faMessage,
  faTableCells,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function Index({ toggle }) {
  const nombre = sessionStorage.getItem("rol");
  const [id, setId] = useState(0);
  const [fot, setFot] = useState("");

  useEffect(() => {
    const ids = localStorage.getItem("idUsua");
    setId(ids);
    console.log(ids);
    getFoto();
  }, [id]);

  const getFoto = () => {
    fetch(`https://incidencias-fiisi.up.railway.app/api/usuario/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const foto = data.img.urlImg;
        console.log("sa", foto);
        setFot(foto);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const avatar =
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  return (
    <>
      <header>
        <div>
          <div className="sm:px-8 pt-1 flex flex-wrap w-full justify-between items-center">
            <div className="flex-none mt-2 mb-5 align-top">
              <h5 className="text-gray-500 text-lg font-bold">
                ¡Te damos la bienvenida Miguel!
              </h5>
              <span className="text-sm font-light pr-6  text-gray-500 rounded-lg ">
                Lunes, 15 de abril, 2024
              </span>
            </div>

            <div className="flex flex-row gap-3">
              <p className="flex-shrink-0 rounded-full block md:hidden border border-sky-700 p-[3px] shadow-lg">
                <FontAwesomeIcon icon={faBars} onClick={toggle} />
              </p>
            </div>
            <div className="avaterSection flex items-center gap-2 sm:gap-6 text-slate-400">
              <ul className="flex flex-row gap-4 text-xl items-center">
                <li className="text-sm font-light pr-6  text-gray-500">
                  <div className="relative m-4">
                    
                    <select
                      className="px-4 py-2 block mr-4 appearance-none w-full bg-white  text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option>Español</option>
                      <option>English</option>
                      <option>French</option>
                    </select>

                    <div className="absolute inset-y-0 right-0 flex items-center px-3 py-4 pointer-events-none">
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
                </li>
                <li>
                  <span className="h-9 w-9 cursor-pointer gap-2 sm:gap-6 text-slate-400">
                    <FontAwesomeIcon icon={faTableCells} />
                  </span>
                </li>
                <li>
                  <span className="h-9 w-9 cursor-pointer gap-2 sm:gap-6 text-slate-400">
                    <FontAwesomeIcon icon={faBell} />
                  </span>
                </li>
                <li>
                  <span className="h-9 w-9 cursor-pointer gap-2 sm:gap-6 text-slate-400">
                    <FontAwesomeIcon icon={faGear} />
                  </span>
                </li>
                <li className="flex-1">
                  <div className="border-gray-200">
                    <div className="flex items-start pb-1">
                      <div className="flex-none w-14 h-14 m-4 mr-1">
                        <img
                          className=" w-12 h-12 rounded-full shadow-md"
                          src="src/img/Frame 4225@2x.png"
                          alt="Bonnie image"
                        />
                      </div>
                      <div className="flex-none mt-3 mb-5 align-top">
                        <h5 className="text-gray-500 text-lg">
                          Miguel Liberato
                        </h5>
                        <span className="text-sm font-light pr-6  text-gray-500 rounded-lg ">
                          CEO LVL Consulting
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Index;
