import React from "react";
import "./ButtonHome.scss"

const ButtonHome = (params) => {
    return (
        <>
            <button className="button-home-custom">
                <div>
                    <img src={params.icon} alt="" />
                </div>
                <p className="secondary-color">{params.title}</p>
            </button>
        </>
    )
};

export default ButtonHome;