import React from 'react';
import {App} from './App';
import {Development} from './Components/Development';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStroopwafel, faDownload, faSearch, faCamera } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faDownload, faSearch, faCamera)
export class Router extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/' component={App} exact />
					<Route path='/development' component={Development} />
				</Switch>
			</BrowserRouter>
		);
	}
}