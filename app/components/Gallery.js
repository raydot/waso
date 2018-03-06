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
							<div className="cell" key={index} style={{backgroundImage: "url(" + item.image + ")"}}>
								<div className="namePlate">
									{ item.name }
								</div>
								<span className="priceSpan">${ item.price }</span>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Gallery;