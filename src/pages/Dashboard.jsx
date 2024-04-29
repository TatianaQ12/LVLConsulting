import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Index.jsx";
import Title from "../components/Title/Title.jsx";
import { useOutletContext } from "react-router-dom";
import CardDashboard from "../components/proy/CardDashboard.jsx";
import TablaLineal from "../components/proy/dataLine.jsx";
import CircularBarra from "../components/proy/BarraCircular.jsx";
import LineaProgress from "../components/proy/LineaProgress.jsx";

function Dashboard() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />
        <div className="mainCard">
          <Title text={"Dashboard"}></Title>
          <div class="flex space-x-4">
            <CardDashboard
              texto={"Ingresos"}
              monto={"S/ 460.00"}
              porcentaje={"+ S/50k"}
              colors={"bg-green-100 text-green-500"}
            />
            <CardDashboard
              texto={"Numero de clientes"}
              monto={"4789"}
              porcentaje={"-30 clientes"}
              colors={"bg-red-100 text-red-500"}
            />
            <CardDashboard
              texto={"Inversión realizada"}
              monto={"S/ 5460.00k"}
              porcentaje={"+ S/32k"}
              colors={"bg-green-100 text-green-500"}
            />
            <CardDashboard
              texto={"Relación de ganancia"}
              monto={"S/ 460.00"}
              porcentaje={"- S/50k"}
              colors={"bg-red-100 text-red-500"}
            />
          </div>
          <Title text={"Historial de ventas"} />
          <TablaLineal></TablaLineal>

          <div class="flex">
            <div class="flex-1">
              <Title text={"Historial de ventas"}></Title>
              <CircularBarra></CircularBarra>
            </div>

            <div class="flex-1 ...">
              <Title text={"Historial de ventas"}></Title>
              <LineaProgress></LineaProgress>
            </div>
          </div>
        </div>
        <div className="mainCard"></div>
      </main>
    </>
  );
}

export default Dashboard;
