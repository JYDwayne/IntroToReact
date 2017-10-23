import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		console.log('render in Square')
		return (
			<button onClick={ () => this.props.onClick() } className="square">
        {this.props.value}
      </button>
		);
	}
}

export {
	Square
}