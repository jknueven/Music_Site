$( document ).ready(function() {
  // Handler for .ready() called.


$("form").on("submit",function(e){
	e.preventDefault();

	var artist = $(".artistSearch").val();

	$.ajax({
	url: "http://api.soundcloud.com/tracks?client_id=03e4633e2d85874a921380e47cac705d&q="+artist,
	type:"GET",
	success: function(songs)
	{
		songs.forEach(function(song)
		{
			$('.Results').append("<div class='resultName'>"+song.title+"</div><div class='col-lg-3 resultArt'><img src='"+song.artwork_url+"'></div>");
		})
		$("img").on('click', function(song){
			$("audio").append("<source src='")
		})
	}
});
})




});