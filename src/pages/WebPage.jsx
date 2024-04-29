import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Index.jsx";
import Title from "../components/Title/Title.jsx";
import { useOutletContext } from "react-router-dom";
import TablaPryecto from "../components/proy/Table.jsx";

function WebPage() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />
        <div className="mainCard">
          <Title text={"Páginas webs"}></Title>
          <TablaPryecto></TablaPryecto>
        </div>
      </main>
    </>
  );
}

export default WebPage;
