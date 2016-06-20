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
				var imgHolder = null;
				if (song.artwork_url === null){
					imgHolder = "http://placehold.it/100x100";
				}
				else {
					imgHolder = song.artwork_url;
				}
				$('.Results').append("<div class='resultName'><p>"+song.title+"</p></div><div class='resultArt'><img data-title='"+song.title+"' data-soundcloud='"+song.id+"' src='"+imgHolder+"'></div>");

			});
			$(".artistSearch").val("");
			$("form").on("submit", function(){
				$('.Results').html("");
			})
		}
		});
	})
	$("body").on("click", '.resultArt img',function(e)
	{
		var sc = $(this).data('soundcloud');
		$( "audio" ).attr( "src", function(){
  		return "http://api.soundcloud.com/tracks/"+sc+"/stream?client_id=03e4633e2d85874a921380e47cac705d";
		});
		var sc1 = $(this).data('title');
		$( ".playing p").html(sc1);
	});
});