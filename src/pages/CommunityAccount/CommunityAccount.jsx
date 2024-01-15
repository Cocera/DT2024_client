import "./CommunityAccount.scss";
import { useState } from "react";
import PieChart from "../../components/PieChart/PieChart";
import { LeftOutlined } from "@ant-design/icons";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";
import Cards from "../../components/Cards/Cards";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import IncidentProgress from "../../components/IncidentProgress/IncidentProgress";

const CommunityAccount = () => {
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
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente architecto impedit aut placeat? Aliquid voluptatum dolorum velit atque molestias, ut dignissimos error. Ea suscipit.",
					},
					{
						id: 2,
						title: "Simulador",
						description:
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente architecto impedit aut placeat? Aliquid voluptatum dolorum velit atque molestias, ut dignissimos error. Ea suscipit.",
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
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente architecto impedit aut placeat? Aliquid voluptatum dolorum velit atque molestias, ut dignissimos error. Ea suscipit.",
					},
				];
			case "Incidencias":
				return [
					{
						id: 1,
						title: "Pendientes",
						description:
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente architecto impedit aut placeat? Aliquid voluptatum dolorum velit atque molestias, ut dignissimos error. Ea suscipit.",
					},
					{
						id: 2,
						title: "Activas",
						description:
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente architecto impedit aut placeat? Aliquid voluptatum dolorum velit atque molestias, ut dignissimos error. Ea suscipit.",
					},
					{
						id: 3,
						title: "Añadir",
						description: "ES49 4576 9087 7584 9043",
					},
					{
						id: 4,
						title: "Historial",
						description:
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente architecto impedit aut placeat? Aliquid voluptatum dolorum velit atque molestias, ut dignissimos error. Ea suscipit.",
					},
				];
			case "Social":
				return [
					{
						id: 1,
						title: "Miembros",
						description:
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente architecto impedit aut placeat? Aliquid voluptatum dolorum velit atque molestias, ut dignissimos error. Ea suscipit.",
					},
					{
						id: 2,
						title: "Tablón de Anuncios",
						description:
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente architecto impedit aut placeat? Aliquid voluptatum dolorum velit atque molestias, ut dignissimos error. Ea suscipit.",
					},
					{
						id: 3,
						title: "Documentos",
						description: "ES49 4576 9087 7584 9043",
					},
					{
						id: 4,
						title: "Actas",
						description:
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente architecto impedit aut placeat? Aliquid voluptatum dolorum velit atque molestias, ut dignissimos error. Ea suscipit.",
					},
					{
						id: 5,
						title: "Votaciones",
						description:
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente architecto impedit aut placeat? Aliquid voluptatum dolorum velit atque molestias, ut dignissimos error. Ea suscipit.",
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

	return (
		<>
			<a>
				{" "}
				<LeftOutlined />
				Comunidades
			</a>
			<h1>Address</h1>
			{selectedOption === "Social" ? (
				<ProfileImage width={300} height={300} />
			) : (
				<PieChart />
			)}
			<IncidentProgress />
			<SegmentedSlider options={options} onChange={handleOptionChange} />
			<Cards cardData={cardData} />
		</>
	);
};

export default CommunityAccount;
