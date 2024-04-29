import {
  faUser,
  faBorderAll,
  faListCheck,
  faMobile,
  faTv,
  faServer,
  faStore,
  faCircleExclamation
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [

  {
    label: 'Maestro'
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: faBorderAll,
  },
  {
    label: "Productos",
    path: "/",
    icon: faListCheck,
  },
  {
    label: "Apps",
    path: "/",
    icon: faMobile,
  },
  {
    label: "Paginas webs",
    path: "/webpage",
    icon: faTv,
    submenu: [
      {
        label: "Administrador",
        path: "/webpage",
      },
      {
        label: "Nuevo formulario",
        path: "/formulario",
      },
      {
        label: "Estudios contables",
      },
      {
        label: "Logistica",
      },
    ]
  },
  {
    label: "Servidores",
    path: "/",
    icon: faServer,
  },
  {
    label: "Tienda",
    path: "/",
    icon: faStore,
  },
  {
    label: "Centro de ayuda",
    path: "/",
    icon: faCircleExclamation,
  },

 
];

export default initMenu