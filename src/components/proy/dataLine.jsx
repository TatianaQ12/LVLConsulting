import React from "react";

function TablaLineal() {
  return (
    <div
      className="bg-white shadow-md p-6"
      style={{ width: "auto", height: "auto", boxSizing: "border-box" }}
    >
      <span className="text-xl text-gray-600">Total libre (GB)</span>

      <svg viewBox="0 0 50 8" style={{ width: "100%", height: "100%" }}>
        {/* Etiquetas del eje X */}
        <text
          x="5%"
          y="95%"
          style={{ fontSize: "0.7px", textAnchor: "middle" }}
        >
          Lunes
        </text>
        <text
          x="25%"
          y="95%"
          style={{ fontSize: "0.7px", textAnchor: "middle" }}
        >
          Martes
        </text>
        <text
          x="45%"
          y="95%"
          style={{ fontSize: "0.7px", textAnchor: "middle" }}
        >
          Miércoles
        </text>
        <text
          x="65%"
          y="95%"
          style={{ fontSize: "0.7px", textAnchor: "middle" }}
        >
          Jueves
        </text>
        <text
          x="85%"
          y="95%"
          style={{ fontSize: "0.7px", textAnchor: "middle" }}
        >
          Viernes
        </text>

        {/* Etiqueta del eje Y para 0 */}
        <text x="2%" y="90%" style={{ fontSize: "0.7px", textAnchor: "end" }}>
          0
        </text>

        {/* Etiqueta del eje Y para 100 */}
        <text x="2%" y="10%" style={{ fontSize: "0.6px", textAnchor: "end" }}>
          100
        </text>

        {/* Línea del gráfico */}
        <path
          fill="none"
          stroke="bg-Emerald-400"
          strokeWidth="0.05"
          d="M5,5 L15,3 L20,0 L35,1 L45,6"
        ></path>

        {/* Filtro de sombra */}
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="0.5"
              stdDeviation="0.2"
              floodColor="green"
              floodOpacity="0.5"
            />
          </filter>
        </defs>

        {/* Aplicar filtro de sombra a la línea */}
        <g filter="url(#shadow)">
          <path
            fill="none"
            stroke="green"
            strokeWidth="0.05"
            d="M5,5 L15,3 L20,0 L35,1 L45,6"
          ></path>
        </g>
      </svg>
    </div>
  );
}
export default TablaLineal;
