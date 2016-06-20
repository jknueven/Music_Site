$( document ).ready(function() {
  // Handler for .ready() called.


$("form").on("submit",function(e){
	e.preventDefault();

	var artist = $(".artistSearch").input.val();

	var data = {
		artist,
	};

	$.ajax({
	url: "http://api.soundcloud.com/tracks?client_id=03e4633e2d85874a921380e47cac705d&", 
	data: data,
	type:"get",
	success: function(result)
	{
		$('audio').append("<source src='")
	}
});
})




});