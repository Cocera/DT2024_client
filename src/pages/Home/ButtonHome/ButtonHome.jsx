import React from "react";
import "./ButtonHome.scss"
import { Link } from "react-router-dom";

const ButtonHome = (params) => {
    return (
        <>
            <Link to={params.route}>
                <button className="button-home-custom">
                    <div>
                        <img src={params.icon} alt="" />
                    </div>
                    <p className="secondary-color">{params.title}</p>
                </button>
            </Link>
        </>
    )
};

export default ButtonHome;