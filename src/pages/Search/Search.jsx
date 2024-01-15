import CardImage from "../../components/CardImage/CardImage";
import { LeftOutlined } from "@ant-design/icons";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useLocation } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


const Search = () => {
    
    const location = useLocation();

    if (location.pathname === '/comunidad/busqueda') {
        return (
            <>
                <Header title="Comunidades" />
                <SearchBar />
                <CardImage />
                <CardImage />
                <Footer/>
            </>
        )
    }

    if (location.pathname === '/incidencia/busqueda') {
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
                <Footer/>
            </>
        )
    }
};

export default Search;
