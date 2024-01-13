import { Segmented } from "antd";
import PieChart from "../../components/PieChart/PieChart";
import { LeftOutlined } from "@ant-design/icons";

const CommunityAccount = () => {
	return (
		<>
			<a>
				{" "}
				<LeftOutlined />
				Comunidades
			</a>
			<PieChart />
			<Segmented options={["Cuentas", "Incidencias", "Documentos"]} block />
		</>
	);
};

export default CommunityAccount;
