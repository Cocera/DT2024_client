import PieChart from "../../components/PieChart/PieChart";
import { LeftOutlined } from "@ant-design/icons";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";

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
	return (
		<>
			<a>
				{" "}
				<LeftOutlined />
				Comunidades
			</a>
			<PieChart />
			<SegmentedSlider options={options} />
		</>
	);
};

export default CommunityAccount;
