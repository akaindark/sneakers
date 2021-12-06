import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
	{title:'Мужские Кросовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/images/sneakers/1.jpg'},
	{title:'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/images/sneakers/2.jpg'},
	{title:'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/images/sneakers/3.jpg'},
	{title:'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/images/sneakers/4.jpg'},
];

function App() {
	return (
		<div className='wrapper'>
			<Drawer />
			<Header />
			<main>
				<section className='content'>
					<div className='content__inner'>
						<h1 className='content__title'>Все кроссовки</h1>
						<div className="content__search-block">
							<img src="/images/search.svg" alt="search"/>
							<input type="text" placeholder='Поиск...'/>
						</div>
					</div>

					<ul className="card__list">

						{arr.map((obj) => (
							<Card title={obj.title}
										price={obj.price}
										imageUrl={obj.imageUrl}
										onFavorite={()=> console.log('Добавили в закладки')}
										onPlus={() => console.log('Нажали плюс')}
							/>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
