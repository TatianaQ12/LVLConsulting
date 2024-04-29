import React from "react";

function CardDashboard({ texto, monto, porcentaje, colors}) {
  return (
    <div class="flex-1 border border-gray-200 bg-white rounded-md">
      <div className="flex-auto p-4">
        <h2 className="text-gray-600 text-ls">{texto}</h2>
        <span className="font-semibold text-xl text-gray-700">{monto}</span>

        <p className="text-sm text-blueGray-400 mt-4">
        <span className={`${colors} rounded-full  text-sm mr-2 px-2 py-1`}>
            {porcentaje}
          </span>

          <span className="text-xs text-gray-400">Desde el mes pasado</span>
        </p>
      </div>
    </div>
  );
}
export default CardDashboard;
