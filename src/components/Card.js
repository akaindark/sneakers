import React from "react";

export default function Card() {
	return (
		<li className="card">
			<div className='card__favorite'>
				<img src="/images/heart-unliked.svg" alt="Unliked"/>
			</div>
			<img width={133} height={112} className="card__img" src="/images/sneakers/1.jpg" alt="Sneakers"/>
			<h5 className='card__text'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
			<div className='card__inner'>
				<div className='card__inner-column'>
					<span>Цена:</span>
					<b>12 999 руб.</b>
				</div>
				<button className='card__btn btn-reset'>
					<img src="/images/plus.svg" alt="add button"/>
				</button>
			</div>
		</li>
	);
}