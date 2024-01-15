import React from "react";
import "./ProfileImage.scss"
import { Image } from 'antd';

const ProfileImage = (params) => {
    // DEFAULT IMAGE
    if (!params.src) {
        return (
            <Image src='https://estudiodaes.es/wp-content/uploads/2020/07/Espai-Verd-1.jpg' width={params.width} height={params.height} preview={false} />
        )
    }
    return (
        <>
            <Image src={params.src} width={params.width} height={params.height} preview={false} />
        </>
    )
};

export default ProfileImage;