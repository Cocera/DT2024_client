import "./SegmentedSlider.scss";
import { Segmented, theme } from "antd";

const { useToken } = theme;

const SegmentedSlider = ({ options, onChange }) => {
	const { token } = useToken();

	const handleOptionClick = (value) => {
		onChange(value);
	};

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
			onChange={handleOptionClick}
			block
		/>
	);
};

export default SegmentedSlider;
