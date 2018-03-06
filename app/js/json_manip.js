//console.log("starting jason_manip");
// let url = "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";

export function parseJSON(data) {

	// brute forcing this for the test, would have to build a more 
	// fluid engine to consume this content regularly.

	let master=[];

	// pull name, price, image out of JSON and push to master variable
	// TODO: create carousel
	$.each( data.groups, function( key, val ) {
		let thisItem = [];
		let na = val.name;
		let pr = val.priceRange === undefined ? val.price["selling"] : val.priceRange["selling"].high;
		let im = val.hero["href"];
		
		let jObj = {
			"name": na,
			"price": pr,
			"image": im
		};

		master.push(jObj);
	});

	JSON.stringify(master);

	return (master);
}


