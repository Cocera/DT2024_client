import PieChart from "../../components/PieChart/PieChart";
import { LeftOutlined } from "@ant-design/icons";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";

const CommunityAccount = () => {
	return (
		<>
			<a>
				{" "}
				<LeftOutlined />
				Comunidades
			</a>
			<PieChart />
			<SegmentedSlider options={["Cuentas", "Incidencias", "Documentos"]} />
		</>
	);
};

export default CommunityAccount;
