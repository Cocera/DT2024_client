import React from "react";
import "./CardImage.scss";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import { Card } from "antd";

const CardImage = ({ items, searchType }) => {
	const renderItem = (item) => {
		if (searchType === "communities") {
			return (
				<>
					<h4>{item.address}</h4>
					<p>{`Propietarios: ${item.n_propie}`}</p>
					<p>{`Inquilinos: ${item.n_inquilinos}`}</p>
					<p>{`Presidente: ${item.president.name}`}</p>
					<p>{`Contacto: ${item.president.mobile_num}`}</p>
				</>
			);
		} else if (searchType === "incidences") {
			return (
				<>
					<h4>{item.title}</h4>
					<h5>{item.community}</h5>
					<p>{item.description}</p>
					<h6>{item.provider}</h6>
				</>
			);
		}
		return null;
	};

	const allItems = items.map((item) => (
		<div key={item._id} className="card-image-container">
			<ProfileImage width={115} height={115} />
			<Card style={{ width: 300, height: 128 }}>{renderItem(item)}</Card>
		</div>
	));

	return <>{allItems}</>;
};

export default CardImage;
