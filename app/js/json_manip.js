//console.log("starting jason_manip");
// let url = "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";

export function parseJSON(data) {
	//data = JSON.stringify(data);

	// brute forcing this for the test, would have to build a more 
	// fluid engine to consume this content regularly.

	let master=[];

	//create the main items array:
	master.push("items:");

	// pull name, price, image out of JSON and push to master variable
	// TODO: create carousel
	$.each( data.groups, function( key, val ) {
		let thisItem = [];
		thisItem.push("name:" + val.name);
		thisItem.push("price:" + (val.priceRange === undefined ? val.price["selling"] : val.priceRange["selling"].high));
		thisItem.push("image:" + val.hero["href"]);
		master.push(thisItem);
	});

	return (master);
}



/*  THIS WORKS!  //
(function() {
	console.log("Here we go!");
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      // $.each( data.items, function( i, item ) {
      //   $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
      //   if ( i === 3 ) {
      //     return false;
      //   }
      // });
      let items = [];
      	$.each( data, function( key, val ) {
				items.push( "<li id='" + key + "'>" + val + "</li>" );
			});

			$( "<ul/>", {
				"class": "my-new-list",
				html: items.join( "" )
		}).appendTo( "body" );
    });
})();
*/


