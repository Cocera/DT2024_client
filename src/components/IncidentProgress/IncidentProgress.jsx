import React from "react";
import {
	HomeOutlined,
	LoadingOutlined,
	SmileOutlined,
	SolutionOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
const description = "Description.";

const IncidentProgress = () => {
	return (
		<Steps
			direction="vertical"
			items={[
				{
					title: "Registro de incidencia",
					status: "finish",
					icon: <HomeOutlined />,
					description,
				},
				{
					title: "Apertura de reclamación",
					status: "finish",
					icon: <SolutionOutlined />,
					description,
				},
				{
					title: "Inspección",
					status: "wait",
					icon: <LoadingOutlined />,
					description,
				},
				{
					title: "Trabajando en la reparación",
					status: "wait",
					icon: <SmileOutlined />,
					description,
				},
				{
					title: "Finalización",
					status: "wait",
					icon: <UserOutlined />,
					description,
				},
			]}
		/>
	);
};

export default IncidentProgress;
