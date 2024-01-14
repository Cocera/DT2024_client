import React from "react";
import "./ProfileImage.scss"
import { Image } from 'antd';

const ProfileImage = (params) => {
    return (
        <>
            <Image src={params.src} width={params.width} height={params.height} />
        </>
    )
};

export default ProfileImage;