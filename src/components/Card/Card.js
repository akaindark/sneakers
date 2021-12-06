import React from "react";
import styles from './Card.module.scss'

export default function Card(props) {
	console.log(props);

	return (
		<li className={styles.card}>
			<div className={styles.favorite} onClick={props.onFavorite}>
				<img src="/images/heart-unliked.svg" alt="Unliked"/>
			</div>
			<img width={133} height={112} className={styles.img} src={props.imageUrl} alt="Sneakers"/>
			<h5 className={styles.text}>{props.title}</h5>
			<div className={styles.inner}>
				<div className={styles.innerColumn}>
					<span>Цена:</span>
					<b>{props.price} руб.</b>
				</div>
				<button className='btn-reset' onClick={props.onPlus}>
					<img src="/images/plus.svg" alt="add button"/>
				</button>
			</div>
		</li>
	);
}