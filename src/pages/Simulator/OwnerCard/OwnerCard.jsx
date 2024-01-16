import React from "react";
import "./OwnerCard.scss";
import ProfileImage from "../../../components/ProfileImage/ProfileImage";

const linkImgProfile = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

const OwnerCard = () => {
    return (
        <div className="owner-card">
            <ProfileImage src={linkImgProfile} width="50px" height="50px"/>
            <div className="info-container">
                <p>Hola</p>
                <p>Hola</p>
                <p>Hola</p>
            </div>
        </div>
    )
};

export default OwnerCard;