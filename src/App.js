import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
						<Card />
						<Card />
						<Card />
						<Card />
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
