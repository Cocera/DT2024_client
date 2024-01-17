import React from "react";
import "./OwnerCard.scss";
import { Divider } from 'antd';

const OwnerCard = ({ ownerId, actualAmount, newAmount }) => {

    const newAmountRounded = Math.round(newAmount);

    return (
        <article className="owner-card">
            <div className="owner-id secondary-color-bg">
                <h2>{ownerId}</h2>
            </div>
            <div className="info-container">
                <div className="info-cuota">
                    <p className="grey-color">Cuota actual:</p>
                    <h2 className="grey-color">{actualAmount}€</h2>
                </div>
                <Divider type="vertical" style={{marginLeft: 24, marginRight: 24, height: 55}} />
                <div className="info-cuota">
                    <p className="grey-color">Cuota estimada:</p>
                    <h2 className="secondary-color">{newAmountRounded}€</h2>
                </div>
            </div>
        </article>
    );
};

export default OwnerCard;
