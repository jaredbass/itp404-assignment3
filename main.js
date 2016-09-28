function getSubreddits(subreddit){

var url = "https://www.reddit.com/r/" + subreddit + ".json"

var promise = $.ajax({

	url: url,
	type: 'get',
	dataType: 'json' }).then(function(reddit){

	console.log(reddit);

	var templateSource = $('#reddit-template').html();
	var template = Handlebars.compile(templateSource)

	var html = template({
		data: reddit.data.children
	});

	$('#reddit').html(html);
},function(){
	console.log("Try again");

	$('#button').on('click', 'button', function(){
	document.getElementsByClassName('description').style.display ="block";

});


});
}


