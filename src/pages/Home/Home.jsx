import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
// import Bubbles from "../../components/Bubbles/Bubbles";
import CircleButton from "../../components/CircleButton/CircleButton";



const Homepage = () => {
	return (
		<>
			<Nav />
			<h1>Esto es la HOMEPAGE</h1>
			{/* <Bubbles/> */}

	<CircleButton/>

			<Footer />
		</>
	);
};

export default Homepage;
