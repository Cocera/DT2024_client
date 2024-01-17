import "./CommunityAccount.scss";
import { useEffect, useState } from "react";
import PieChart from "../../components/PieChart/PieChart";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";
import Cards from "../../components/Cards/Cards";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Flex } from "antd";

const CommunityAccount = () => {
	const dispatch = useDispatch();
	const { getAccessTokenSilently } = useAuth0();
	const { communities } = useSelector((state) => state.communities);

	const location = useLocation();
	const type = location.pathname.includes("/comunidad/cuentas")
		? "communities"
		: "incidences";

	useEffect(() => {
		const getUserMetadata = async () => {
			const domain = "http://localhost:8080";

			try {
				const accessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: `${domain}`,
					},
				});
				localStorage.setItem("token", JSON.stringify(accessToken));
			} catch (e) {
				console.error(e.message);
			}
		};
		getUserMetadata();
	}, [getAccessTokenSilently, dispatch]);

	const communityData = [
		{ name: "Icon1", value: 400 },
		{ name: "Icon2", value: 700 },
		{ name: "Icon3", value: 200 },
		{ name: "Icon4", value: 1000 },
		{ name: "Icon5", value: 200 },
		{ name: "Icon6", value: 1000 },
	];

	const incidenceData = [
		{ name: "Icon1", value: 8 },
		{ name: "Icon2", value: 5 },
		{ name: "Icon3", value: 1 },
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
						title: "Historial",
						description:
							"Historial de cuentas de la comunidad.",
					},
					{
						id: 2,
						title: "Simulador",
						description:
							"Simulador de cuentas de la comunidad.",
					},
					{
						id: 3,
						title: "Cuenta",
						description: "ES49 4576 9087 7584 9043",
					},
					{
						id: 4,
						title: "Operar",
						description:
							"Hacer operaciones directamente con el banco",
					},
				];
			case "Incidencias":
				return [
					{
						id: 1,
						title: "Pendientes",
						description:
							"5 incidencias a resolver",
					},
					{
						id: 2,
						title: "Activas",
						description:
							"17 incidencias en curso",
					},
					{
						id: 3,
						title: "Añadir",
						description: "Añadir una incidencia",
					},
					{
						id: 4,
						title: "Historial",
						description:
							"Historial de incidencias resueltas",
					},
				];
			case "Social":
				return [
					{
						id: 1,
						title: "Miembros",
						description:
							"Visualizar miembros de la comunidad",
					},
					{
						id: 2,
						title: "Tablón de Anuncios",
						description:
							"Acceder a las noticias importantes de la comunidad",
					},
					{
						id: 3,
						title: "Documentos",
						description: "Acceder a la documentación de la comunidad",
					},
					{
						id: 4,
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
					<PieChart
						data={selectedData}
						type={type}
						selectedOption={selectedOption}
					/>
				)}
			</div>

			<Flex vertical="true" align="strecht" style={{ paddingLeft: 28, paddingRight: 28 }}>
				<SegmentedSlider options={options} onChange={handleOptionChange} />
				<div className="container-margins">
					<Cards cardData={cardData} />
				</div>
			</Flex>
			<Footer />
		</>
	);
};

export default CommunityAccount;
