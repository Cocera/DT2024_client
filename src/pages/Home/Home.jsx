import "./Home.scss";
import MainMenu from "../../components/MainMenu/MainMenu";
import backgroundImg from "../../assets/Images/Home_image.png";
import ButtonHome from "./ButtonHome/ButtonHome";

import IconCommunityHome from "../../assets/HomeIcons/comunidad_icon.png";
import IconDocumentsHome from "../../assets/HomeIcons/documents_icon.png";
import IconIncidencesHome from "../../assets/HomeIcons/incidences_icon.png";
import IconProfileHome from "../../assets/HomeIcons/profile_icon.png";
import IconSuppliersHome from "../../assets/HomeIcons/suppliers_icon.png";
import IconTranscriptionHome from "../../assets/HomeIcons/transcription_icon.png";
import Login from "../../components/Login/Login";

const Homepage = () => {
	return (
		<>
			<div className="container-home-buttons">
				<Login />
				<ButtonHome icon={IconCommunityHome} title="Comunidad" />
				<ButtonHome icon={IconIncidencesHome} title="Incidencias" />
				<ButtonHome icon={IconSuppliersHome} title="Proveedores" />
				<ButtonHome icon={IconTranscriptionHome} title="Transcripción" />
				<ButtonHome icon={IconDocumentsHome} title="Documentos" />
				<ButtonHome icon={IconProfileHome} title="Perfil" />
			</div>
		</>
	);
};

export default Homepage;
