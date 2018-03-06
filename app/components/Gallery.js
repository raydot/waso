import React, { Component } from 'react';
//import Global from './Global';

class Gallery extends Component {

	//console.log(this.props.items);
	//debugger;
	render() {
		return (
			<div className="grid">
				{
					this.props.items.map((item, index) => {
						//let { name } = item.name;
						let { price } = item.price;
						return (
							<div className="cell" key={index}>
							{ item.name }<br />
							{ item.price }<br />
							<img src={ item.image } width="300" alt=" {item.name} " />
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Gallery;