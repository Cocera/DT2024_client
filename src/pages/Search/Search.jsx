import CardImage from "../../components/CardImage/CardImage";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAll } from "../../features/communities/communitySlice";
import { useAuth0 } from "@auth0/auth0-react";
import { Flex, FloatButton } from "antd";
import { PlusOutlined } from '@ant-design/icons';

const Search = () => {
	const dispatch = useDispatch();
	const { getAccessTokenSilently } = useAuth0();
	const location = useLocation();
	const { communities } = useSelector((state) => state.communities);
	const incidences = useSelector((state) => state.incidences);
	const [searchType, setSearchType] = useState(
		location.pathname === "/comunidad/busqueda" ? "communities" : "incidences"
	);

	useEffect(() => {
		const getUserMetadata = async () => {
			const domain = "http://localhost:8080";

			try {
				const accessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: `${domain}`,
					},
				});
				localStorage.setItem("token", JSON.stringify(accessToken));
				dispatch(getAll());
			} catch (e) {
				console.error(e.message);
			}
		};
		getUserMetadata();
	}, [getAccessTokenSilently, dispatch]);

	const handleSearchTypeChange = (type) => {
		setSearchType(type);
	};

	return (
		<>
			<Header
				title={searchType === "communities" ? "Comunidades" : "Incidencias"}
			/>
			<FloatButton
				shape="circle"
				type="primary"
				style={{
					right: 24,
					bottom: 100,
					height: 55,
					width: 55,
				}}
				icon={<PlusOutlined />}
			/>
			<Flex justify="" align="center" vertical="true" style={{ paddingLeft: 18, paddingRight: 18 }}>

				<SearchBar
					onSearchTypeChange={handleSearchTypeChange}
					searchType={searchType}
				/>

				{searchType === "communities" && (
					<CardImage items={communities} searchType="communities" />
				)}
				{searchType === "incidences" && (
					<CardImage items={incidences} searchType="incidences" />
				)}
			</Flex>
			<Footer />
		</>
	);
};

export default Search;
