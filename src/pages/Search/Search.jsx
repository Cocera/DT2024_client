import CardImage from "../../components/CardImage/CardImage";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAll } from "../../features/communities/communitySlice";
import { useAuth0 } from "@auth0/auth0-react";

const Search = () => {
	const dispatch = useDispatch();
	const { getAccessTokenSilently } = useAuth0();
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

	const location = useLocation();
	const { communities } = useSelector((state) => state.communities);
	const [searchType, setSearchType] = useState("community");

	const handleSearchTypeChange = (type) => {
		setSearchType(type);
	};

	const incidences = useSelector((state) => state.incidences);

	if (location.pathname === "/comunidad/busqueda") {
		return (
			<>
				<Header title="Comunidades" />
				<SearchBar
					onSearchTypeChange={handleSearchTypeChange}
					searchType="communities"
				/>
				{searchType === "communities" && (
					<CardImage communities={communities} />
				)}
				<Footer />
			</>
		);
	}

	if (location.pathname === "/incidencia/busqueda") {
		return (
			<>
				<Header title="Incidencias" />
				<SearchBar
					onSearchTypeChange={handleSearchTypeChange}
					searchType="incidences"
				/>
				{searchType === "incidences" && <CardImage incidences={incidences} />}
				<Footer />
			</>
		);
	}
};

export default Search;
