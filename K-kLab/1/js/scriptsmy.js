$(document).ready(function(){

	//scroll smooth to the certain location
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = this.hash, $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing', function() {
            window.location.hash = target;
        });
    });

    var homeNum = $("#home").offset().top + $("#home").height();
    var portNum = $("#port").offset().top + $("#port").height();
    var aboutNum = $("#about").offset().top + $("#about").height();
    var contactNum = $("#contact").offset().top + $("#contact").height();

    var currentNum = 1;
   
    //$('html, body').animate({scrollTop:$('#div_id').position().top}, 'slow');
    var fadeTime = 1000;

	beginAnimation(false);

	var detectDevice = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

	$('#home-title3').waypoint(function(direction) {
		if(direction=="down")
		{
			beginAnimation(true);
			$('#home').animate({'opacity':'0'},fadeTime); 
			$('#port').animate({'opacity':'1'},fadeTime); 
		}

		if(direction=="up")
		{
			beginAnimation(false);
			$('#home').animate({'opacity':'1'},fadeTime); 
			$('#port').animate({'opacity':'0'},fadeTime); 
		}

	});


	$('#ports').waypoint(function(direction) {
		if(direction=="down")
		{
			skillAnimation(false);
			$('#port').animate({'opacity':'0'},fadeTime); 
			$('#about').animate({'opacity':'1'},fadeTime); 
		}

		if(direction=="up")
		{
			skillAnimation(true); 
			$('#port').animate({'opacity':'1'},fadeTime); 
			$('#about').animate({'opacity':'0'},fadeTime);
		}
	 
	});

	/*$('#about').waypoint(function(direction) {
		if(direction=="down")
		{
			skillAnimation(false);
		}
	});*/

	$('#aboutpoints').waypoint(function(direction) {
		if(direction=="down")
		{
			skillAnimation(true);
			$('#about').animate({'opacity':'0'},fadeTime); 
			$('#contact').animate({'opacity':'1'},fadeTime);
			

		}

		if(direction=="up")
		{
			skillAnimation(false); 
			$('#about').animate({'opacity':'1'},fadeTime); 
			$('#contact').animate({'opacity':'0'},fadeTime);
			
		}
	 
	});


	$('#form').waypoint(function(direction) {
		if(direction=="down")
		{
			skillAnimation(true);
			$('#about').animate({'opacity':'0'},fadeTime); 
			
		}

		if(direction=="up")
		{
			skillAnimation(false); 
			$('#about').animate({'opacity':'1'},fadeTime);
			
		}
	 
	});

	function skillAnimation(reset){

		if(!reset){
			$('#htmlcss').animate({'width':'90%'},3000); 
			$('#jquery').animate({'width':'70%'},3000); 
			$('#javascript').animate({'width':'75%'},3000); 
			$('#wordpress').animate({'width':'60%'},3000); 
			$('#design').animate({'width':'80%'},3000); 
			$('#flash').animate({'width':'85%'},3000);
		}else{
			$('#htmlcss').animate({'width':'0%'},100); 
			$('#jquery').animate({'width':'0%'},100); 
			$('#javascript').animate({'width':'0%'},100); 
			$('#wordpress').animate({'width':'0%'},100); 
			$('#design').animate({'width':'0%'},100); 
			$('#flash').animate({'width':'0%'},100); 
		}
	}

	function beginAnimation(reset){
		var duration = 1200;

		if(!reset){
			$('#home-title1').animate({'right':'0px','opacity':'1'},duration); 
			$('#home-title2').delay(500).animate({'right':'0px','opacity':'1'},duration); 
			$('#home-title3').delay(1000).animate({'right':'0px','opacity':'1'},duration); 
			$('#home-title4').delay(1500).animate({'top':'30px','opacity':'1'},duration); 
		}else{
			$('#home-title1').animate({'right':'150px','opacity':'0'},duration); 
			$('#home-title2').animate({'right':'150px','opacity':'0'},duration); 
			$('#home-title3').animate({'right':'150px','opacity':'0'},duration); 
			$('#home-title4').animate({'top':'250px','opacity':'0'},duration); 
		}
	}


    $(document).scroll(function () {
    	$("#testNum").html($(window).scrollTop());


		/* Check the location of each desired element */
        /*$('.slide').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            // If the object is completely visible in the window, fade it it 
            if( bottom_of_window > (bottom_of_object-350) ){
                $(this).animate({'opacity':'1'},350); 
            }
        }); */

    	/*var fadeTime = 350;
    	//detect window position
    	if($(window).scrollTop() >= 0){
    		currentNum = 1;
    	}

    	if($(window).scrollTop() >= homeNum+1){
    		currentNum = 2;
    	}

    	if($(window).scrollTop() >= portNum+1){
    		currentNum = 3;
    	}

    	if($(window).scrollTop() >= aboutNum+1){
    		currentNum = 4;
    	}


    	//detect currentNum
    	switch(currentNum){
    		case 1:
    			$('#home').animate({'opacity':'1'},fadeTime); 
    			$('#port').animate({'opacity':'0'},fadeTime); 
    			currentNum = 5;
    		break;

    		case 2:
    			$('#port').animate({'opacity':'1'},fadeTime);
    			$('#home').animate({'opacity':'0'},fadeTime);
    			$('#about').animate({'opacity':'0'},fadeTime);
    			currentNum = 5;
    		break;

    		case 3:
	    		$('#about').animate({'opacity':'1'},fadeTime);
	    		$('#port').animate({'opacity':'0'},fadeTime);
	    		$('#contact').animate({'opacity':'0'},fadeTime);
	    		currentNum = 5;
    		break;

    		case 4:
    			$('#contact').animate({'opacity':'1'},fadeTime);
    			$('#about').animate({'opacity':'1'},fadeTime);
    			currentNum = 5;
    		break;
    	}*/
	})//scroll function
});









			