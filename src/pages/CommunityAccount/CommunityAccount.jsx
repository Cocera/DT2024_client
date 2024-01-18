import "./CommunityAccount.scss";
import { useEffect, useState } from "react";
import PieChart from "../../components/PieChart/PieChart";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardDetail from "../../components/CardDetail/CardDetail";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Flex } from "antd";
import getUserMetadata from "../../features/auth/authService";
import { getCommunityById } from "../../features/communities/communitySlice";

const CommunityAccount = () => {
	const dispatch = useDispatch();
	const { getAccessTokenSilently } = useAuth0();

	const location = useLocation();

	const { community } = useSelector((state) => state.communities);
	const [communityData, setCommunityData] = useState([]);

	useEffect(() => {
		if (community.gastos) {
			const gastosArray = Object.entries(community.gastos).map(([k, v]) => ({
				name: k,
				value: v,
			}));
			setCommunityData(gastosArray);
		}
	}, [community.gastos]);

	useEffect(() => {
		getUserMetadata(getAccessTokenSilently);
		dispatch(getCommunityById(location.state._id));
	}, [getAccessTokenSilently, dispatch, location]);

	const incidenceData = [
		{ name: "Resueltas", value: 78 },
		{ name: "Pendientes", value: 5 },
		{ name: "Activas", value: 17 },
	];

	const [selectedOption, setSelectedOption] = useState("Cuentas");

	const handleOptionChange = (value) => {
		setSelectedOption(value);
	};

	const getCardData = () => {
		switch (selectedOption) {
			case "Cuentas":
				return [
					{
						id: 1,
						section: "Cuenta",
						title: "Historial",
						description: "Historial de cuentas de la comunidad.",
					},
					{
						id: 2,
						section: "Cuenta",
						title: "Simulador",
						description: "Simulador de cuentas de la comunidad.",
					},
					{
						id: 3,
						section: "Cuenta",
						title: "Cuenta",
						description: "ES49 4576 9087 7584 9043",
					},
					{
						id: 4,
						section: "Cuenta",
						title: "Operar",
						description: "Hacer operaciones directamente con el banco",
					},
				];
			case "Incidencias":
				return [
					{
						id: 1,
						section: "Incidencias",
						title: "Pendientes",
						description: "5 incidencias a resolver",
					},
					{
						id: 2,
						section: "Incidencias",
						title: "Activas",
						description: "17 incidencias en curso",
					},
					{
						id: 3,
						section: "Incidencias",
						title: "Añadir",
						description: "Añadir una incidencia",
					},
					{
						id: 4,
						section: "Incidencias",
						title: "Historial",
						description: "Historial de incidencias resueltas",
					},
				];
			case "Social":
				return [
					{
						id: 1,
						section: "Social",
						title: "Miembros",
						description: "Visualizar miembros de la comunidad",
					},
					{
						id: 2,
						section: "Social",
						title: "Tablón de Anuncios",
						description: "Acceder a las noticias importantes de la comunidad",
					},
					{
						id: 3,
						section: "Social",
						title: "Documentos",
						description: "Acceder a la documentación de la comunidad",
					},
					{
						id: 4,
						section: "Social",
						title: "Votaciones",
						description:
							"Crear una votación o revisar el estado de las votaciones",
					},
				];
			default:
				return [];
		}
	};

	const cardData = getCardData();

	const options = [
		{
			label: (
				<div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }}>
					Cuentas
				</div>
			),
			value: "Cuentas",
		},
		{
			label: (
				<div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }}>
					Incidencias
				</div>
			),
			value: "Incidencias",
		},
		{
			label: (
				<div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }}>
					Social
				</div>
			),
			value: "Social",
		},
	];

	const selectedData =
		selectedOption === "Cuentas" ? communityData : incidenceData;

	return (
		<>
			<Header title="Comunidades" community="Calle Doctor Moliner, 27" />
			<div className="container-pie-chart">
				{selectedOption === "Social" ? (
					<ProfileImage width={300} height={300} />
				) : (
					<PieChart data={selectedData} selectedOption={selectedOption} />
				)}
			</div>
			<section className="container-card-data-community">
				<SegmentedSlider options={options} onChange={handleOptionChange} />
				<div className="container-margins">
					<CardDetail cardData={cardData} />
				</div>
			</section>
			<Footer />
		</>
	);
};

export default CommunityAccount;
