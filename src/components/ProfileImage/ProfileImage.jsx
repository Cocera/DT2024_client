import React from "react";
import "./ProfileImage.scss"
import { Image } from 'antd';

const ProfileImage = (params) => {
    if (!params.src) {
        return (
            <div className="profile-image-rounded">
                <Image src='https://estudiodaes.es/wp-content/uploads/2020/07/Espai-Verd-1.jpg' width={params.width} height={params.height} preview={false} />
            </div>

        )
    }
    return (
        <div className="profile-image-rounded">
            <Image src={params.src} width={params.width} height={params.height} preview={false} />
        </div>
    )
};

export default ProfileImage;