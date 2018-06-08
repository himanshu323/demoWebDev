var movies=[

{
	title:"Hello brother",

	rating:4.1,

	hasWatched: true


},

{
	title:"ABC",

	rating:3.1,

	hasWatched: false

},

{
	title:"XYZ",

	rating:2,

	hasWatched: true

}

]

movies.forEach(function(movie){
var status;
if(movie.hasWatched){
	status="watched";
}
else{
	status="not seen"
}
console.log("You have " + status + " " + movie.title +" - " + movie.rating + " stars " )

});