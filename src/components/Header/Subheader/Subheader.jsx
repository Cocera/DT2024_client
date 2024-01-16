import React from "react";
import './Subheader.scss';
import { LeftOutlined } from "@ant-design/icons";

const Subheader = (params) => {
    return (
        <>
            <div className="second-header grey-color">
                <LeftOutlined />
                <div>
                    <p>{params.title}</p>
                    {params.community ? <p className="community-address secondary-color">{params.community}</p> : ""}
                    
                </div>
            </div>
        </>
    )
};

export default Subheader;