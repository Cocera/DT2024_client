import "./CardImage.scss";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import { Card } from "antd";
import { Link } from "react-router-dom";

const CardImage = ({ items, searchType }) => {
	const renderItem = (item) => {
		if (searchType === "communities") {
			return (
				<>
					<h3 className="secondary-color">{item.address}</h3>
					<p className="grey-color">{`Propietarios: ${item.n_propie}`}</p>
					<p className="grey-color">{`Inquilinos: ${item.n_inquilinos}`}</p>
					<p className="grey-color">{`Presidente: ${item.president.name}`}</p>
					<p className="grey-color">{`Contacto: ${item.president.mobile_num}`}</p>
				</>
			);
		} else if (searchType === "incidences") {
			return (
				<>
					<h3 className="secondary-color">{item.title}</h3>
					<h4 className="secondary-color">{item.community}</h4>
					<p className="grey-color">{item.description}</p>
					<h5 className="secondary-color">{item.provider}</h5>
				</>
			);
		}
		return null;
	};

	const allItems = items.map((item) => (
		<Link
			key={item._id}
			state={{ _id: item._id }}
			to={`/comunidad/cuenta/${item._id}`}>
			<div key={item._id} className="card-image-container">
				<ProfileImage width={115} height={115} src={item.image} />
				<Card style={{ width: 300, height: 128 }}>{renderItem(item)}</Card>
			</div>
		</Link>
	));

	return <>{allItems}</>;
};

export default CardImage;
