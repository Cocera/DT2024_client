import React from "react";

const ProfileIcon = ({ width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="member_user_outline_24px">
        <g id="icon">
          <path
            d="M4 17.8629C4 15.6538 5.79039 13.8629 7.99953 13.8629C9.33672 13.8629 10.7928 13.8629 12 13.8629C13.2072 13.8629 14.6633 13.8629 16.0005 13.8629C18.2096 13.8629 20 15.6538 20 17.8629V18.25C20 19.3546 19.1046 20.25 18 20.25H6C4.89543 20.25 4 19.3546 4 18.25V17.8629Z"
            stroke="white"
            stroke-width="1.5"
          />
        </g>
      </g>
    </svg>
  );
};

export default ProfileIcon;
