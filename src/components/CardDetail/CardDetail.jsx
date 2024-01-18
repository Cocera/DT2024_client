import "./CardDetail.scss";
import { RightOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const CardDetail = ({ cardData }) => {
	if (cardData.length <= 0) {
		return "No existe ...";
	}
	const data = cardData.map((data) => {
		return (
			<Link
				to={
					"/comunidad/" +
					`${data.section.toLowerCase()}/${data.title.toLowerCase()}`
				}>
				<article className="container-card-detail" key={data.id}>
					<div className="container-card-flex-txt">
						<h3 className="secondary-color">{data.title}</h3>
						<p className="grey-color">{data.description}</p>
					</div>
					<div className="container-card-flex-icon">
						<RightOutlined
							className="secondary-color"
							style={{ fontSize: "20px" }}
						/>
					</div>
				</article>
			</Link>
		);
	});
	return <>{data}</>;
};

export default CardDetail;
