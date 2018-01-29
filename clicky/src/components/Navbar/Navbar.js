import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<ul>		    
				<li className="itemLeft"></li>
				<li className="itemCenter"></li>
				<li className="itemRight">Clicky Memory Game Score: {this.props.score}</li>
			</ul>
		</nav>
		);
	}
}

export default Navbar;





