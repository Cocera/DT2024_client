import { RightOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";

const CardDetail = ({ cardData }) => {
	if (cardData.length <= 0) {
		return "No existe ...";
	}
	const data = cardData.map((data) => {
		return (
			<a href={"/community/account/" + data.title} key={data.id}>
				<Card bordered={false}>
					<Row gutter={[16, 16]} align="middle">
						<Col span={20}>
							<h1>{data.title}</h1>
							<p>{data.description}</p>
						</Col>
						<Col>
							<RightOutlined style={{ fontSize: "32px" }} />
						</Col>
					</Row>
				</Card>
			</a>
		);
	});
	return <>{data}</>;
};

export default CardDetail;
