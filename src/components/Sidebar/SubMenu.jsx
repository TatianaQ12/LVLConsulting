// SubMenu.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function SubMenu({ menu, isOpen, toggleSubMenu, ...props }) {
  return (
    <div className={``} key={menu.label}>
      <li
        className={`link ${isOpen ? "active" : ""}`}
        onClick={toggleSubMenu}
      >
        {menu.icon && <FontAwesomeIcon icon={menu.icon} />}
        <p className="flex-1">{menu.label}</p>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`${isOpen && "rotate-90"} duration-200 w-4 h-4`}
        />
      </li>
      {isOpen && (
        <motion.ul
          animate={{
            height: "fit-content",
          }}
          className="flex flex-col pl-[39px] text-[0.7rem]"
        >
          {menu.submenu.map((sm) => (
            <li key={sm.label} >
              <NavLink to={`${menu.path}${sm.path}`} className="link">
                {sm.label}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

export default SubMenu;
