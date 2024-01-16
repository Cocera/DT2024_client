import React from "react";
import "./IncidenceInfo.scss";
import Header from "../../components/Header/Header";
import IncidenceImage from "../../components/IncidenceImage/IncidenceImage";
import IncidenceProgress from "../../components/IncidenceProgress/IncidenceProgress";
import IncidenceDetail from "../../components/IncidenceDetail/IncidenceDetail";
import { Button } from "antd";
import Footer from "../../components/Footer/Footer.jsx";

const incidence = {
  community: "",
  title: "Humedad en la escalera",
  description:
    "La humedad está generada por filtraciones de las últimas lluvias. Afecta a los pisos intermedios, entre el 3º y 4º piso. Necesidad de raspado, aislamiento y pintura.",
  owner: "Daniel Martí",
  provider: "Fontanería y pintura",
  date: "14/01/2024",
  status: "Registro de incidencia",
  image: "/src/assets/Images/humedadg.jpeg",
};

const IncidenceInfo = () => {
  return (
    <>
      <Header
        title="Pendientes/Humedad en la escalera"
        community="Av.Reino de Valencia, 87"
      />
      <IncidenceImage incidence={incidence}/>
      
      <IncidenceDetail incidence={incidence} />

      <div className="div-btn-aprobar">
        <Button className="btn-aprobar" type="primary">
          Aprobar
        </Button>
      </div>
      <IncidenceProgress />
      <Footer />
    </>
  );
};

export default IncidenceInfo;
