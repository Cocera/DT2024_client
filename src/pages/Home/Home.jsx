import "./Home.scss";
import backgroundImg from "../../assets/Images/Home_image.png";
import ButtonHome from "./ButtonHome/ButtonHome";
import LogoApp from "../../assets/Logo_TuAppMin2.png";
import IconCommunityHome from "../../assets/HomeIcons/comunidad_icon.png";
import IconDocumentsHome from "../../assets/HomeIcons/documents_icon.png";
import IconIncidencesHome from "../../assets/HomeIcons/incidences_icon.png";
import IconProfileHome from "../../assets/HomeIcons/profile_icon.png";
import IconSuppliersHome from "../../assets/HomeIcons/suppliers_icon.png";
import IconTranscriptionHome from "../../assets/HomeIcons/transcription_icon.png";
import { useAuth0 } from "@auth0/auth0-react";

const Homepage = () => {
	const { user, isAuthenticated } = useAuth0();

	return (
		isAuthenticated && (
			<>
				<main className="home-main">
					<div className="home-welcome-logo">
						<h2>
							¡Hola <br /> {user.name.split(" ")[0]}!
						</h2>
						<img src={LogoApp} alt="" />
					</div>
					<div className="container-home-buttons">
						<ButtonHome
							icon={IconCommunityHome}
							title="Comunidad"
							route="/comunidad/busqueda"
						/>
						<ButtonHome
							icon={IconIncidencesHome}
							title="Incidencias"
							route="/incidencia/busqueda"
						/>
						<ButtonHome icon={IconSuppliersHome} title="Proveedores" route="" />
						<ButtonHome
							icon={IconTranscriptionHome}
							title="Transcripción"
							route=""
						/>
						<ButtonHome icon={IconDocumentsHome} title="Documentos" route="" />
						<ButtonHome icon={IconProfileHome} title="Perfil" route="/signin" />
					</div>
					<div className="home-img-container">
						<img src={backgroundImg} alt="" />
					</div>
				</main>
			</>
		)
	);
};

export default Homepage;
