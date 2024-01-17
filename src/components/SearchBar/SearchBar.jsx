import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getByAddress } from "../../features/communities/communitySlice";

const SearchBar = ({ onSearchTypeChange, searchType }) => {
	const [options, setOptions] = useState([]);

	const { communities } = useSelector((state) => state.communities);
	const setAddressOptions = (communities) => {
		const addressArray = [];
		communities.forEach((community) => {
			addressArray.push({
				value: community.address,
				label: (
					<div key={community._id}>
						<span>{community.address}</span>
					</div>
				),
			});
		});
		setOptions(addressArray);
	};
	const dispatch = useDispatch();

	const handleSubmit = (text) => {
		if (onSearchTypeChange) {
			onSearchTypeChange(searchType, text);
		}

		if (searchType === "communities") {
			dispatch(getByAddress(text));
			setAddressOptions(communities);
		}
		// else if (searchType === "incidences") {
		// 	dispatch(getIncidenceByName(keywords));
		// }
	};

	return (
		<>
			<AutoComplete
				options={options}
				style={{
					width: 366,
				}}
				onSearch={handleSubmit}
				placeholder={<SearchOutlined />}
			/>
		</>
	);
};

export default SearchBar;
