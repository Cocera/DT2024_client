import "./IncidenceInfo.scss";
import Header from "../../components/Header/Header";
import IncidenceImage from "../../components/IncidenceImage/IncidenceImage";
import IncidenceProgress from "../../components/IncidenceProgress/IncidenceProgress";
import IncidenceDetail from "../../components/IncidenceDetail/IncidenceDetail";
import { Button } from "antd";

const incidence = {
	community: "",
	title: "Humedad en la escalera",
	description:
		"La humedad está generada por filtraciones de las últimas lluvias. Afecta a los pisos intermedios, entre el 3º y 4º piso. Necesidad de raspado, aislamiento y pintura.",
	owner: "Daniel Martí",
	provider: "Fontanería y pintura",
	date: "14/01/2024",
	status: "Registro de incidencia",
	image: "/src/assets/Images/humedadg.jpeg",
};

const IncidenceInfo = () => {
	return (
		<>
			<Header />
			<IncidenceImage incidence={incidence} />
			<IncidenceDetail incidence={incidence} />
			<Button className="btn" type="primary">
				Aprobar
			</Button>
			<IncidenceProgress />
		</>
	);
};

export default IncidenceInfo;
