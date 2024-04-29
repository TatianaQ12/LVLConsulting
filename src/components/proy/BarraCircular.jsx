import React from "react";

function CircularBarra() {
  return (
    <div
      className="bg-white shadow-md p-6 mr-8"
      style={{ width: "auto", height: "auto", boxSizing: "border-box" }}
    >
      <div class="flex">
      <div class="flex-1 mx-2">
          <img src="src/img/Group 7210.png" alt="Imagen de historial de ventas" />
        </div>
        <div class="flex-1 mx-2">
          <h2 className="text-gray-600 text-ls">Anual</h2>
          <span className="font-semibold text-xl text-gray-700">100%</span>
          <h2 className="text-gray-600 text-xs">S/4500</h2>
        </div>

        <div class="flex-1 mx-4">
          <h2 className="text-gray-600 text-ls">Mensual</h2>
          <span className="font-semibold text-xl text-gray-700">60%</span>
          <h2 className="text-gray-600 text-xs">S/4500</h2>
        </div>

        <div class="flex-1 mx-4">
          <h2 className="text-gray-600 text-ls">Semanal</h2>
          <span className="font-semibold text-xl text-gray-700">20%</span>
          <h2 className="text-gray-600 text-xs">S/4500</h2>
        </div>

        <div class="flex-1 mx-4">
          <h2 className="text-gray-600 text-ls">Diario</h2>
          <span className="font-semibold text-xl text-gray-700">30%</span>
          <h2 className="text-gray-600 text-xs">S/4500</h2>
        </div>


       
      </div>
    </div>
  );
}

export default CircularBarra;
