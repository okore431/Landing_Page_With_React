import React from "react";

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
    return (
		<div className="footer fixed-bottom bg-dark">
			<div className="container">
				<p className="text-white text-center mt-2">
					Builded with ❤️ using React.js - {year}
				</p>
			</div>
		</div>
    )
}

export default Footer


