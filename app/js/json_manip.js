//console.log("starting jason_manip");
// let url = "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";
// get_json_data(url);

// let url = "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";
// get_json_data(url);


//exported functions
export function get_json_data(path)  {
	//url += "&callback=?";
	console.log('path: ' + path);
		
	const json = require('json-loader!' + path);
	console.log(json);



	// $.getJSON(path, {
	// 	//format: "json"
	// })
	// .done(function (data) {
	// 	console.log("data: " + data);
	// 	let items = [];
	// 	$.each( data, function( key, val ) {
	// 		items.push( "{" + key + ":" + value + "}" );
	// 	});

	// 	console.log(items);

	// // 	// $( "<ul/>", {
	// // 	// 	"class": "my-new-list",
	// // 	// 	html: items.join( "" )
	// // 	// }).appendTo( "myDiv" );
	// });
	// $.get(path).done(function (data) {
 //    	console.log(data);
	// });
} //get_json_data

// export function help_out_a_brother(url) {
// 	console.log("Help him out!");
// 	url += "&callback=?";
//     $.ajax({
//       url: url,
//       type: 'GET',
//       dataType: 'json',
//       crossDomain: false,
//       success: function (data, textStatus, xhr) {
//         console.log(data);
//       },
//       error: function (xhr, textStatus, errorThrown) {
//         console.log(errorThrown);
//       }
//     });
// }

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


