import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "../axios";

function Cards() {
	const [people, setPeople] = useState([]);

	// const swiped = (direction, nameToDelete) => {
	// 	// setLastDirection(direction);
	// };

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get("/tinder/cards");
			setPeople(req.data);
		}

		fetchData();
	}, []);

	const outOfFrame = (name) => {
		console.log(name + "left the screen");
	};
	return (
		<div className='tinderCards'>
			<div className='tinderCards_cardContainer'>
				{people.map((character) => (
					<TinderCard
						className='swipe'
						key={character.name}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swiped(dir, character.name)}
						onCardLeftScreen={() => outOfFrame(character.name)}
					>
						<div
							style={{ backgroundImage: `url(${character.imgUrl})` }}
							className='card'
						>
							<h3> {character.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default Cards;
