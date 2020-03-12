$(function() {
	'use strict';
	var obj = {
		init: function() {
			this.topJS();
			// this.Overnotes();
			// this.Kijkaku();
		},
		topJS: function () {
			$(window).bind('load', function () {
				new WOW().init();
				$('.selector').slick({
					autoplay: true,
					autoplaySpeed: 4000,
					dots: false,
					arrows: false,
					pauseOnFocus: false,
					pauseOnHover: false,
					pauseOnDotsHover: false,
					fade: true,
				 	cssEase: 'linear',
				 	slidesToShow: 4,
				 	slidesToScroll: 4,
				 	centerMode: true,
				 	variableWidth: true,
				 	infinite: true,
				 	responsive: [
				 	   {
				 	     breakpoint: 1024,
				 	     settings: {
				 	       slidesToShow: 3,
				 	       slidesToScroll: 3,
				 	     }
				 	   },
			 	   	]
				});
			});
		},
		Overnotes: function () {
			$.ajax({
				'url' : 'blog/_custom/?limit=4&cat=1',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var thumb = val.img01 ? $(val.img01).attr('src') : 'images/under_img.jpg';
						var $li = $('<li>'+tlt+'</li>');
						$li.appendTo('.selector');	
					});
				}
			});
		},
		Kijkaku: function () {
			$.ajax({
				'url' : 'blog/_custom/',
				'dataType' : 'jsonp',
				'success' : function(json){
					console.log(json.data);
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var $li = $('<li>'+tlt+'</li>');
						$li.appendTo('.selector');	
					});
				}
			});
		},
	};
	obj.init();
});