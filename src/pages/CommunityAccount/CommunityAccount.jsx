import PieChart from "../../components/PieChart/PieChart";
import { LeftOutlined } from "@ant-design/icons";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";
import Cards from "../../components/Cards/Cards";

const CommunityAccount = () => {
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
					Documentos
				</div>
			),
			value: "Documentos",
		},
	];

	const cardData = [
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

	return (
		<>
			<a>
				{" "}
				<LeftOutlined />
				Comunidades
			</a>
			<PieChart />
			<SegmentedSlider options={options} />
			<Cards cardData={cardData} />
		</>
	);
};

export default CommunityAccount;
