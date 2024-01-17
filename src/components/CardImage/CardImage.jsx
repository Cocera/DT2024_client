import React from "react";
import "./CardImage.scss";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import { Card } from "antd";

const CardImage = ({ communities }) => {
	const allCommunities = communities.map((community) => {
		return (
			<div key={community._id} className="card-image-container">
				<ProfileImage width={115} height={115} />
				<Card style={{ width: 300, height: 128 }}>
					<h4>{community.address}</h4>
					<p>{`Propietarios: ${community.n_propie}`}</p>
					<p>{`Inquilinos: ${community.n_inquilinos}`}</p>
					<p>{`Presidente: ${community.president.name}`}</p>
					<p>{`Contacto: ${community.president.mobile_num}`}</p>
				</Card>
			</div>
		);
	});
	return <>{allCommunities}</>;
};

export default CardImage;
