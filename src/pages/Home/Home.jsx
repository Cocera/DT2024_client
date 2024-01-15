import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import MainMenu from "../../components/MainMenu/MainMenu";

const Homepage = () => {
	return (
		<>
			<Nav />
			<h1>Esto es la HOMEPAGE</h1>
			<MainMenu/>
			<Footer />
		</>
	);
};

export default Homepage;
