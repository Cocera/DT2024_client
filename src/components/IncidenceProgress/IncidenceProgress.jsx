import PublishIcon from "@mui/icons-material/PublishRounded";
import ListIcon from "@mui/icons-material/ListAltRounded";
import SearchIcon from "@mui/icons-material/SearchRounded";
import BuildIcon from "@mui/icons-material/BuildRounded";
import LogoutIcon from "@mui/icons-material/LogoutRounded";

import { Steps } from "antd";
const description = "Description.";

const IncidenceProgress = () => {
	return (
		<Steps
			direction="vertical"
			items={[
				{
					title: "Registro de incidencia",
					status: "finish",
					icon: <PublishIcon />,
					description,
				},
				{
					title: "Apertura de reclamación",
					status: "finish",
					icon: <ListIcon />,
					description,
				},
				{
					title: "Inspección",
					status: "wait",
					icon: <SearchIcon />,
					description,
				},
				{
					title: "Trabajando en la reparación",
					status: "wait",
					icon: <BuildIcon />,
					description,
				},
				{
					title: "Finalización",
					status: "wait",
					icon: <LogoutIcon />,
					description,
				},
			]}
		/>
	);
};

export default IncidenceProgress;
