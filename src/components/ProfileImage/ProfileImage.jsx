import React from "react";
import "./ProfileImage.scss"
import { Image } from 'antd';

const ProfileImage = (params) => {
    return (
        <>
                <Image src={params.src} width={200} height={200} />
        </>
    )
};

export default ProfileImage;