import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';
import * as json_manip from '../js/json_manip.js';

//IMPORT THE JSON
//const jsonData = require('../json/data.json');
const dataVar = json_manip.parseJSON(require('../json/data.json'));
console.log(dataVar);

class Global extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			items: []
		}
	}
	search() {
		console.log('search', this.state.query);

		//this hits the google api and returns JSON
		//const BASE_URL='https://www.googleapis.com/books/v1/volumes?q=';
		//const BASE_URL='https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';
		// fetch(`${BASE_URL}${this.state.query}`, { method:'GET'})
		// 	.then(response => response.json())
		// 	//.then(json => console.log(json));
		// 	.then(json => {
		let { items } = dataVar;
		// 		//console.log(items);
		// 		this.setState({items})
		// 	});
		// 	//console.log("items:" + ${items});
		
		//let {items} = json_manip.parseJSON(jsonData);
		this.setState({items});
		
	}

	render() {
		return (
			<div className="Global">
				<h2>Book explorer!</h2>
				<FormGroup>
					<InputGroup>
						<FormControl 
							type="text" 
							placeholder="Search for a book" 
							onChange={event => this.setState({query: event.target.value})}
							onKeyPress={event => {
								if (event.key === 'Enter'){
									this.search();
								}
							}}
						/>
						<InputGroup.Addon onClick={() => this.search()}>
							<Glyphicon glyph="search"></Glyphicon>
						</InputGroup.Addon>
					</InputGroup>
					<Gallery items={ this.state.items }/>
				</FormGroup>
			</div>
		)
	}
}

export default Global;