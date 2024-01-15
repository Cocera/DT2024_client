import CardImage from "../../components/CardImage/CardImage";
import { LeftOutlined } from "@ant-design/icons";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";

const Search = () => {
	const location = useLocation();

	if (location.pathname === "/comunidad/busqueda") {
		return (
			<>
				<a>
					{" "}
					<LeftOutlined />
					Comunidades
				</a>
				<SearchBar />
				<CardImage />
				<CardImage />
			</>
		);
	}

	if (location.pathname === "/incidencia/busqueda") {
		return (
			<>
				<a>
					{" "}
					<LeftOutlined />
					Incidencias
				</a>
				<SearchBar />
				<CardImage />
				<CardImage />
			</>
		);
	}
};

export default Search;
