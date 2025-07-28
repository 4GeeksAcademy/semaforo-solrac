import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Circle } from "./Circle";

//create your first component

const Home = () => {


	const [fondoActual, setFondoActual] = useState("");


	return (

		<div className="justify-content-center align-items-center m-3">
			<div className="soport container bg-dark"
				style={{ background: "black", width: "20px", height: "100px" }}></div>
			<div className="body container"
				style={{ background: "black", width: "300px", height: "700px" }}>
				<div className="row">
					<Circle color="danger" fondoActual={fondoActual} changeColor={setFondoActual} />
					<Circle color="warning" fondoActual={fondoActual} changeColor={setFondoActual} />
					<Circle color="success" fondoActual={fondoActual} changeColor={setFondoActual} />
				</div>
			</div>
		</div>
	);
};

export default Home;