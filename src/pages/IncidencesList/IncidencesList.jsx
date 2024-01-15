import CardImage from "../../components/CardImage/CardImage";
import Footer from "../../components/Footer/Footer";
import "./IncidencesList.scss";
import { LeftOutlined } from "@ant-design/icons";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header/Header";

const IncidencesList = () => {
    const location = useLocation();

    if (location.pathname === '/comunidad/incidencias/activas') {
        return (
            <>
                <Header title="Activas" community="Dirección comunidad" />
                <CardImage />
                <Footer />

            </>
        )
    }

    if (location.pathname === '/comunidad/incidencias/pendientes') {
        return (
            <>
                <Header title="Pendientes" community="Dirección comunidad" />
                <CardImage />
                <Footer />

            </>
        )
    }
};

export default IncidencesList;
