import { useState } from "react";
import { AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllCommunities,
	getCommunityByAddress,
} from "../../features/communities/communitySlice";
import { getIncidenceByKeyword } from "../../features/incidences/incidenceSlice";

const SearchBar = ({ onSearchTypeChange, searchType }) => {
	const dispatch = useDispatch();
	const { communities } = useSelector((state) => state.communities);
	const { incidences } = useSelector((state) => state.incidences);
	const [options, setOptions] = useState([]);

	const setAddressOptions = (communities) => {
		const addressOptions = communities.map((community) => ({
			value: community.address,
			label: <div key={community._id}>{community.address}</div>,
		}));
		setOptions(addressOptions);
	};

	const handleSearch = (text) => {
		if (onSearchTypeChange) {
			onSearchTypeChange(searchType, text);
		}
		if (text == "") {
			dispatch(getAllCommunities());
			setAddressOptions(communities);
			return;
		}
		if (searchType === "communities") {
			dispatch(getCommunityByAddress(text));
			setAddressOptions(communities);
		} else if (searchType === "incidences") {
			dispatch(getIncidenceByKeyword(text));
		}
	};

	return (
		<AutoComplete
			options={options}
			style={{ width: 366 }}
			onSearch={handleSearch}
			placeholder={<SearchOutlined />}
		/>
	);
};

export default SearchBar;
