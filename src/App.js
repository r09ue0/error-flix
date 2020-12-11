import "./App.css";

import Bannner from './components/Banner';
import Row from './components/Row';
import requests from './requests';

function App() {
	return (
		<div className="app">

		<Bannner />

			<Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
			<Row title="Trending Now" fetchURL={requests.fetchTrending} />
			<Row title="TopRated" fetchURL={requests.fetchTopRated} />
			<Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
