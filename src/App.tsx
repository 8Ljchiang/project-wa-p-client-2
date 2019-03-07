import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

// import Routes from './routes/index';
import Routes from './routes/AnimationIndex';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app-container">
				<BrowserRouter>
					<Routes/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
