import React from "react";
import Navbar from "./navbar.jsx";
import Jumborton from "./jumborton.jsx";
import Card from "./card.jsx";
import Footer from "./footer";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumborton />
				<div className="d-flex flex-wrap justify-content-center">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;