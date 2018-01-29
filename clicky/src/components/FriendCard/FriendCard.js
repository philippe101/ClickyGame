import React from "react";
import "./FriendCard.css";


//pass image into each card so all 12 are rendered
const FriendCard = props => (
	<div className="card" onClick={props.imageClick}>
		<div className="img-container">
			<img alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
		</div>
	</div>
);

export default FriendCard;