import React from "react";
import { useLocation } from "react-router-dom";
import editButtonImage from "../../assets/Images/edit-button.png";
import "../IncidenceDetail/IncidenceDetail.scss"

const IncidenceDetail = ({ incidence }) => {
  const location = useLocation();

  const isAprobadaRoute =
    location.pathname === "/comunidad/incidencias/info/aprobada";

  return (
    <div className="info">
      <div className="incidence-detail-title">
        <h6 className="title">{incidence.title}</h6>

        {!isAprobadaRoute && (
          <img
            src={editButtonImage}
            alt="edit-button"
            className="edit-button"
          />
        )}
      </div>
      <p>{incidence.description}</p>

      <h6>Publicada por:</h6>
      <p>{incidence.owner}</p>

      <h6>Proveedor contactado: </h6>
      <p>{incidence.provider}</p>

      <h6>Fecha de incidencia:</h6>
      <p>{incidence.date}</p>
    </div>
  );
};

export default IncidenceDetail;
