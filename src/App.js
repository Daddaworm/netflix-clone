import './App.css';
import Row from './Row'
import requests from './requests';

function App() {
  return (
    <div className="App">
      <p>this is app js</p>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
