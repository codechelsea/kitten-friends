import React from 'react';
import Card from './Card';

const CardList = ({ Kittens }) => {
	const cardsArray = Kittens.map((user, i) => {
		return <Card key={i} id={Kittens[i].id} name ={Kittens[i].name} email={Kittens[i].email}/>
	});
	return (
	<div>
    {cardsArray}
    </div>
	);
}
export default CardList;