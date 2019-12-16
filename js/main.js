$(function(){
	$(".close").click(function(e){
		e.preventDefault();
		if($("input[name=todayClose]").is(":checked")){
			setCookie("close", "yes", 1);
		}
		$(".popup").removeClass("active");
	});

	if(GetCookie("close") == "yes"){
		// $(".popup").hide();
	}else{
		// $(".popup").show(); 
		$(".popup").addClass("active");
	}

	function setCookie(name, value, expiredays){
		var days=expiredays;
		if(days){
			var date=new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires="; expires="+date.toGMTString();
		}else{
			var expires="";
		}
		document.cookie=name+"="+value+expires+"; path=/";
	}
	function GetCookie(name){
		var value=null, search=name+"=";
		if(document.cookie.length > 0){
			var offset=document.cookie.indexOf(search);
			if(offset != -1){
				offset+=search.length;
				var end=document.cookie.indexOf(";", offset);
				if(end == -1) end=document.cookie.length;
				value=unescape(document.cookie.substring(offset, end));
			}
		} return value;
	}




	$("#GNB").hover(
		function(){
			$("#header .menu").addClass("over");
		},
		function(){
			$("#header .menu").removeClass("over");
		}
	);

	$("#GNB > ul > li:first-child > a").focusin(function(){
		$(this).parents(".menu").addClass("over");
	});
	$("nav li:last-child li:last-child").focusout(function(){
		$(this).parents(".menu").removeClass("over");
	});

	$("#GNB > ul > li > a").focusin(function(){
		$(this).addClass("over");
	});
	$("#GNB li li:last-child").focusout(function(){
		$(this).parent().prev("a").removeClass("over");
	});

	var video=document.getElementById("my_video");

	$(".control").click(function(e){
		e.preventDefault();
		video.play();
		$(this).fadeOut(300);
		$(".control").removeClass("active");
	});
	$("#my_video").click(function(){

		if($(".control").is(":visible")) return;


		video.pause();
		$(".control").fadeIn(300);
		$(".control").addClass("active");
	});

	$(".control").focusin(function(){

		video.play();
		$(this).fadeOut(300);
		$(".control").removeClass("active");
	});
	$("#my_video").focusout(function(){

		if($(".control").is(":visible")) return;


		video.pause();
		$(".control").fadeIn(300);
		$(".control").addClass("active");
	});


	video.addEventListener("ended", function(){
		$(".control").fadeIn(300);
		video.pause();
		video.currentTime=0;
	});
});
