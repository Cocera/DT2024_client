import React from "react";
import "./SegmentedSlider.scss";
import { Avatar, Flex, Segmented, Button, theme } from "antd";

const { useToken } = theme;

const SegmentedSlider = ({ options }) => {
	const { token } = useToken();
	console.log("main color: ", token.colorPrimary);
	console.log("secondary color: ", token.colorSecondary);

	return (
		<Segmented
			style={{
				padding: 0.5,
				itemActiveBg: token.colorSecondary,
				itemSelectedColor: "#FFFFFF",
				itemSelectedBg: token.colorSecondary,
				colorBgLayout: token.colorSecondary,
			}}
			options={options}
		/>
	);
};

export default SegmentedSlider;
