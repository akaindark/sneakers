import React from "react";

export default function Drawer() {
	return (
		<aside className='drawer__overlay'>
			<div className="drawer">
				<h2>Корзина</h2>
				<img className='removeBtn' src="/images/btn-remove.svg" alt="Remove"/>

				<div className="item">

					<div className="cartItem">
						<div className='cartItem__img' style={{backgroundImage: "url(/images/sneakers/1.jpg)"}}>
						</div>
						<div className='cartItem__inner'>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className='removeBtn' src="/images/btn-remove.svg" alt="Remove"/>
					</div>

					<div className="cartItem">
						<div className='cartItem__img' style={{backgroundImage: "url(/images/sneakers/2.jpg)"}}>
						</div>
						<div className='cartItem__inner'>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className='removeBtn' src="/images/btn-remove.svg" alt="Remove"/>
					</div>

				</div>

				<div className='cartTotalBlock'>
					<ul>
						<li className='cartTotalBlock__item'>
							<span>Итого: </span>
							<div></div>
							<b>21 498 руб. </b>
						</li>
						<li className='cartTotalBlock__item'>
							<span>Налог 5%: </span>
							<div></div>
							<b>1074 руб. </b>
						</li>
					</ul>
					<button className='btn-reset greenButton'>Оформить заказ <img src="/images/arrow.svg" alt="Arrow"/></button>
				</div>

			</div>
		</aside>
	);
}