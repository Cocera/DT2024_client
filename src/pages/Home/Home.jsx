import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import MainMenu from "../../components/MainMenu/MainMenu";
import Header from "../../components/Header/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Nav />
      <MainMenu />

      <Footer />
    </>
  );
};

export default Homepage;
