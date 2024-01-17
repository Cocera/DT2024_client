import React from "react";
import "./OwnerCard.scss";
import { Divider } from 'antd';

const OwnerCard = (params) => {
    return (
        <article className="owner-card">
            <div className="owner-id secondary-color-bg">
                <h2>{params.ownerId}</h2>
            </div>
            <div className="info-container">
                <div className="info-cuota">
                    <p className="grey-color">Cuota actual:</p>
                    <h2 className="grey-color">{params.actualAmount}€</h2>
                </div>
                <Divider type="vertical" style={{marginLeft: 24, marginRight: 24, height: 55}} />
                <div className="info-cuota">
                    <p className="grey-color">Cuota estimada:</p>
                    <h2 className="secondary-color">{params.newAmount}€</h2>
                </div>
            </div>
        </article>
    )
};

export default OwnerCard;