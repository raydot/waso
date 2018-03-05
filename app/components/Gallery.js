import React, { Component, Global } from 'react';

class Gallery extends Component {
	render() {
		return (
			<div>Item Component{

				this.props.items.map(item, index => {
				// 	let {title} = item.volumeInfo;
				// 	return (
				// 		<div key={index}>{title}</div>
				// 	)
				})
				
			}
			</div>
		)
	}
}

export default Gallery;