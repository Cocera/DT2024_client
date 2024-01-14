import React from "react";
import "./CardImage.scss";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import { Card } from 'antd';

const CardImage = () => {
    return (
        <>
            <div className="card-image-container">
                <ProfileImage width={115} height={115} />
                <Card style={{ width: 300, height: 128 }}>
                    <h4>Nombre dirección</h4>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        </>
    )
};

export default CardImage;