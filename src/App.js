import "./App.css";

import Bannner from './components/Banner';
import NavBar from "./components/NavBar";
import Row from './components/Row';
import requests from './requests';

function App() {
	return (
		<div className="app">

			<NavBar />

			<Bannner />

			<Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
			<Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow />
			<Row title="TopRated" fetchURL={requests.fetchTopRated} isLargeRow />
			<Row title="Action Movies" fetchURL={requests.fetchActionMovies} isLargeRow />
			<Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} isLargeRow />
			<Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} isLargeRow />
			<Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} isLargeRow />
			<Row title="Documentaries" fetchURL={requests.fetchDocumentaries} isLargeRow />
		</div>
	);
}

export default App;
