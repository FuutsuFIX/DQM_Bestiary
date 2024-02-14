import { useState } from "react";
import MainTemplate from "../../MainTemplate/MainTemplate.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Catalogue from "../Catalogue/Catalogue.jsx";
import Info from "../Info/Info.jsx";
import MonsterDetail from "../MonsterDetail/MonsterDetail.jsx";
import Logo from "../../../assets/images/web_logo.png";

function App() {
  const nav = [
    { url: "/", text: "Home", exact: true },
    { url: "/catalogue", text: "Catalogue", exact: false },
    { url: "/info", text: "Info", exact: true },
  ];
  return (
    <BrowserRouter>
      <MainTemplate
        footerCourseName="Applicazioni Web: Progettazione e Sviluppo"
        footerCourseLink="https://elearning.unimib.it/course/view.php?id=51512"
        navItems={nav}
        logo={Logo}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalogue" element={<Catalogue />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/catalogue/:number" element={<MonsterDetail />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
