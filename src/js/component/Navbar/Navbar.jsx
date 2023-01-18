import React from "react";

const menuItems = ["Home", "About", "Services", "Contact"];
const title = "Start Bootstrap";

const showMenu = menuItems.map((singleItem, i) => {
    return <li className="nav-item" key={i}><a className="nav-link" href="#">{singleItem}</a></li>
}
);

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <div className="container">
            <a className="navbar-brand" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex justify-content-end" id="navbarTogglerDemo02">
                    <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                        {showMenu}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;