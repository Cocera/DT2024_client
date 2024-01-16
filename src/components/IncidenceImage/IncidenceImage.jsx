import React from "react";
import "./IncidenceImage.scss";
import { Image } from "antd";

const IncidenceImage = ({ incidence }) => {
	if (!incidence.image || incidence.image == "") {
		return (
			<Image
				className="img"
				src="/src/assets/Images/humedadg.jpeg"
				width="100vw"
				height="auto"
			/>
		);
	}
	return (
		<>
			<Image
				className="img"
				src={incidence.image}
				width="100vw"
				height="auto"
				style={{ preview: false }}
			/>
		</>
	);
};

export default IncidenceImage;
