//console.log("starting jason_manip");
// let url = "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";

export const jsonManip = (data) => {

	// brute forcing this for the test, would have to build a more 
	// fluid engine to consume this content regularly.

	let master=[];

	// pull name, price, image out of JSON and push to master variable
	// TODO: create carousel
	// TODO: Do this with map()
	$.each( data.groups, function( key, val ) {
		let thisItem = [];
		let na = val.name;
		let pr = val.priceRange === undefined ? val.price["selling"] : val.priceRange["selling"].high;
		let im = val.hero["href"];
		let ci = val.images;

		let ciData = [];
		$.each(ci, function (key, val) {
			ciData.push(val.href);
		});

		//console.log("CID: " + ciData);

		let jObj = {
			"name": na,
			"price": pr,
			"image": im,
			"carouselIm": ciData
		};

		master.push(jObj);
	});

	JSON.stringify(master);

	//console.log(master)

	return (master);
}


