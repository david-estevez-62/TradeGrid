$(function(){


// var tabs = document.querySelector('paper-tabs');
// 	tabs.addEventListener('core-select', function() {
// 	// console.log("Selected: " + tabs.selected);
// });



var Status = 'open';


$(".toggle1").click(function(){
	var newDiv = document.createElement('div');
		newDiv.style.width = '478.5px';
		newDiv.style.height = '115px';
		newDiv.style.position = 'absolute';
		newDiv.style.top = '0px';
		newDiv.style.left = '693.5px';
		newDiv.style.backgroundColor = '#B5BCBA';
		newDiv.className = "midmenubar"

	if(Status === 'open'){
		
		

		$('.sidebar').hide();

		$("body").append(newDiv);

		$("#menubar2").css({"left":1172})

		$('.sidehandle').css({"right":0})

		$('.btmbar').css({"width":"1250px"})
		$('#bid').css({"margin-left":"500px"})
		$('#save').css({"margin-left":"1140px"})

		$('.btmbarHeader').css({"width":"1250px"})

		$('.btmblock').css({"left":"165px"})





		Status = 'closed';

	}else{

		$('.sidebar').show();

		$(".midmenubar").remove();

		$("#menubar2").css({"left":693})

		$('.sidehandle').css({"right":479})

		$('.btmbar').css({"width":"1040px"})
		$('#bid').css({"margin-left":"312px"})
		$('#save').css({"margin-left":"945px"})

		$('.btmbarHeader').css({"width":"1040px"})

		$('.btmblock').css({"left":"20px"})

		Status = 'open';

	}
})



// $(".sidebarHeader").click(function(){
// 	console.log('hi')
// 	if(Status === 'open'){
// 		console.log('hi')
// 		$('.sidebar').toggle();
// 		$(".label").css({'margin-left':'0px'});
// 		Status = 'closed';
// 	}else{
// 		$('.sidebar').toggle();
// 		$(".label").css({'margin-left':'-0.5px'});
// 		Status = 'open'
// 	}
// })

var Toggle = 'on';


$(".btmbarHeader").click(function(){
	
	if (Toggle === 'on') {
		$('.btmbar').hide()

		Toggle = 'off';
	}
	else {
		$('.btmbar').show()

		Toggle = 'on';
	}
	


});



})






// $(document).ready(function(){
// 	$('.chant1').on('click', function(){
// 		var postData = $(".input1").val();

// 		console.log(postData)

// 		$.post('/addChant', {postData:postData} , function(data){
// 			// console.log(data);
// 			console.log('test', data);

// 		});
// 	})
// });

		
	// $(".team1").on('click', function(e){

	// 	e.preventDefault();

	// 	Click btn will have team id attached to it. Once clicked send id and post it to database

	// 	$.post('/ideaPosted', {uniqueId:uniqueId, function(data){

	// 		$('#ideaPosted').text(data.posts);

	// 	});

	// 	$('.postinput').val('');


	// 	$(".ideaTable").prepend('<tr><td></td><td class="ideaBody"><h3>' + postData + '</h3></td><td><a class="delete">Remove</a></td></tr>');
	// });

	// $(".team2").on('click', function(e){

	// 	e.preventDefault();

	// 	// var postData = $(".postinput").val();
	// 	// // var postData2 = $('#upload').val();
	// 	// console.log(postData)

	// 	$('.postinput').removeClass('noborder');

	// 	console.log($('#addPost'));


	// 	$.post('/ideaPosted', {postData:postData, function(data){
	// 		// console.log(data);

	// 		$('#ideaPosted').text(data.posts);

	// 	});

	// 	$('.postinput').val('');


	// 	$(".ideaTable").prepend('<tr><td></td><td class="ideaBody"><h3>' + postData + '</h3></td><td><a class="delete">Remove</a></td></tr>');
	// });


