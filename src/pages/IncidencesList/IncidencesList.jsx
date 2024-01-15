import CardImage from "../../components/CardImage/CardImage";
import Footer from "../../components/Footer/Footer";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import "./IncidencesList.scss";
import { LeftOutlined } from "@ant-design/icons";
import { useLocation } from 'react-router-dom';

const IncidencesList = () => {
    const location = useLocation();

    if (location.pathname === '/comunidad/incidencias/activas') {
        return (
            <>
                <h1>IncidencesList</h1>
                <a>
                    {" "}
                    <LeftOutlined />
                    Activas
                </a>
                <h1>Direccion de la comunidad</h1>
                <CardImage/>
                <Footer/>
    
            </>
        )
    }

    if (location.pathname === '/comunidad/incidencias/pendientes') {
        return (
            <>
                <h1>IncidencesList</h1>
                <a>
                    {" "}
                    <LeftOutlined />
                    Pendientes
                </a>
                <h1>Direccion de la comunidad</h1>
                <CardImage/>
                <Footer/>
    
            </>
        )
    }
};

export default IncidencesList;
