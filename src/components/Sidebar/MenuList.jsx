// MenuList.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubMenu from "./SubMenu";

function MenuList({ menus, ...props }) {
  const [openSubMenu, setOpenSubMenu] = useState("");

  const handleSubMenuClick = (label) => {
    setOpenSubMenu(openSubMenu === label ? "" : label);
  };

  return (
    <div className="navWrapper p-4">
      <ul id="menu">
        {menus?.map((menu) =>
          menu.submenu ? (
            <SubMenu
              key={menu.label}
              menu={menu}
              isOpen={openSubMenu === menu.label}
              toggleSubMenu={() => handleSubMenuClick(menu.label)}
              {...props}
            />
          ) : menu.path ? (
            <li
              key={menu.label}
              className="flex items-center w-full p-2 text-base text-blue transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <NavLink to={`${menu.path}`} className="link">
                {menu.icon && <FontAwesomeIcon icon={menu.icon} />}
                {menu.label}
              </NavLink>
            </li>
          ) : (
            <li key={menu.label} className="mt-5 mb-3">
              <span className="text-gray-500 font-medium text-ls mx-2">
                Menú
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default MenuList;
