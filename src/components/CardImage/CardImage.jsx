import React from "react";
import "./CardImage.scss";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import { Card } from "antd";
import { Link } from "react-router-dom";

const CardImage = ({ items, searchType }) => {
    const renderItem = (item) => {
        if (searchType === "communities") {
            return (
                <>
                    <h3 className="secondary-color">{item.address}</h3>
                    <p className="grey-color">{`Propietarios: ${item.n_propie}`}</p>
                    <p className="grey-color">{`Inquilinos: ${item.n_inquilinos}`}</p>
                    <p className="grey-color">{`Presidente: ${item.president.name}`}</p>
                    <p className="grey-color">{`Contacto: ${item.president.mobile_num}`}</p>
                </>
            );
        } else if (searchType === "incidences") {
            return (
                <>
                    <h4>{item.title}</h4>
                    <h5>{item.community}</h5>
                    <p>{item.description}</p>
                    <h6>{item.provider}</h6>
                </>
            );
        }
        return null;
    };

    const allItems = items.map((item) => (
        <Link to={`/comunidad/cuenta/${item._id}`}>
            <div key={item._id} className="card-image-container">
                <ProfileImage width={115} height={115} src={item.image} />
                <Card style={{ width: 300, height: 128 }}>{renderItem(item)}</Card>
            </div>
        </Link> 
    ));

    return <>{allItems}</>;
};

export default CardImage;
