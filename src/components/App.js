import React from 'react';

require('../stylesheets/app.scss');

class App extends React.Component {

	componentWillMount(){
		console.log('App.js loading...');
	}

  render() {
	
    return (
	<div>
		
		{this.props.children}
	</div>
	);
  }
	
}

module.exports = App;
