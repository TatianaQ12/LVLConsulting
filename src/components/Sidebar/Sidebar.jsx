import React, { useEffect, useRef, useState } from "react";
import initMenus from "../../data/menus.js";
import "./sidebar.css";
import MenuList from "./MenuList.jsx";

// aqui para configurar lo del meu lateral

function Sidebar({ ...props }) {
  const [menus, setMenus] = useState(initMenus);

  return (
    <>
      <aside
        id="sidebar"
        className={`bg-sky-10 sidebarWrapper md:translate-x-0 -translate-x-full md:z-0 z-50 no-scrollbar`}
      >
          <div class="my-16 ml-4 mr-4">
            <img src="src/img/Capa_1.png" class="w-44 h-auto" />
          </div>
          <MenuList menus={menus} toggle={props.toggle} />
      </aside>
    </>
  );
}

export default Sidebar;
