import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';
import './App.css';
import ContainerSelector from './components/ContainerSelector/ContainerSelector';

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
