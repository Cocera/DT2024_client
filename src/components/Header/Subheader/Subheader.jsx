import React from "react";
import './Subheader.scss';
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Subheader = (params) => {
    return (
        <>
            <div className="second-header grey-color">
                <LeftOutlined />
                <div>
                    <Link to={params.route}>
                        <p>{params.title}</p>
                    </Link>
                    {params.community ? <p className="community-address secondary-color">{params.community}</p> : ""}

                </div>
            </div>
        </>
    )
};

export default Subheader;