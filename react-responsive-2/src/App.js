import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import { Footer, Navbar } from './components';

function App() {
	return (
		<div className="App">
			<Router>
				<GlobalStyle />
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
