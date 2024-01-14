import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Bubbles from "../../components/Bubbles/Bubbles";
import MainMenu from "../../components/MainMenu/MainMenu";


const Homepage = () => {
	return (
		<>
			<Nav />
			<h1>Esto es la HOMEPAGE</h1>
			<MainMenu/>
			<Bubbles/>
			<Footer />
		</>
	);
};

export default Homepage;
