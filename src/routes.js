// routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router';

// Main Component
import MainApp from './components/App';

// Page Components
import DefaultPage from './components/DefaultPage';

export default (
	<Route path="/" component={MainApp} >
		<IndexRoute component={DefaultPage} />
	</Route>
);
