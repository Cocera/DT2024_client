import React from "react";
import IncidenceImage from "../../components/IncidenceImage/IncidenceImage";
import "./IncidenceInfo.scss";
import { Button } from "antd";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Incidencia = {
  title: "Humedad en la escalera",
  description:
    "La humedad está generada por filtraciones de las últimas lluvias. Afecta a los pisos intermedios, entre el 3º y 4º piso. Necesidad de raspado, aislamiento y pintura.",
  user: "Daniel Martí",
  provider: "Fontanería y pintura",
  date: "14/01/2024",
};

const IncidenceInfo = () => {
  return (
    <>
      <Header title="Pendientes / Humedad en escalera" community="Av. Reino de Valencia, 87" />
      <div className="container-incidence-info">
        <IncidenceImage />
        <div className="info">
          <h6 className="title">{Incidencia.title}</h6>
          <p>{Incidencia.description}</p>

          <h6>Publicada por:</h6>
          <p>{Incidencia.user}</p>

          <h6>Proveedor contactado: </h6>
          <p>{Incidencia.provider}</p>

          <h6>Fecha de incidencia:</h6>
          <p>{Incidencia.date}</p>
        </div>
        <Footer />
        <Button className="btn" type="primary">
          Aprobar
        </Button>
      </div>
    </>
  );
};

export default IncidenceInfo;
