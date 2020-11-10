import "./App.css";
import Cards from "./CardComponent/Cards";
import Header from "./HeaderComponent/Header";
import SwipeButtons from "./SwipeButtons/SwipeButtons";

function App() {
	return (
		<div className='app'>
			<Header />
			<Cards />
			<SwipeButtons />
		</div>
	);
}

export default App;
