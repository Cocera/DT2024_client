import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import PowerBi from "../../components/PowerBi/PowerBi";

const Homepage = () => {
	return (
		<>
			<Nav />
			<h1>Esto es la HOMEPAGE</h1>

			<h1>Power BI Report Embedded in React</h1>
			<PowerBi />

			<Footer />
		</>
	);
};

export default Homepage;
