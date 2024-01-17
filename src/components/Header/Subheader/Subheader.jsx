import React from "react";
import './Subheader.scss';
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Subheader = (params) => {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="second-header grey-color">
                <LeftOutlined style={{ fontSize: "15px" }} onClick={goBack} />
                <div>
                    <p onClick={goBack}>{params.title}</p>
                    {params.community ? <p className="community-address secondary-color">{params.community}</p> : ""}

                </div>
            </div>
        </>
    )
};

export default Subheader;