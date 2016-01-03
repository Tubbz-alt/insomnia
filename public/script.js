//using: http://jquerytimer.com/

$(function() {
    $('#NASAcircle').hover(function() { 
        $('#NASAinfo').show(); 
    }, function() { 
        $('#NASAinfo').hide(); 
    });
});

$(function() {
    $('#NASAcircle').click(function() {
    	$('#timer').timer('remove'); 
    	        
		$('#timer').timer({
			format: '%h:%m:%s',
		    duration: '26m',
		    callback: function() {			    		
		        $('#timer').timer('reset');
		        $('#timer').timer('pause');

	    		document.getElementById('alarmsound').play();
	    	}

		});		
	});
});


$(function() {
    $('#powernap').hover(function() { 
        $('#powernapinfo').show(); 
    }, function() { 
        $('#powernapinfo').hide(); 
    });
});

$(function() {
    $('#powernap').click(function() { 
    	$('#timer').timer('remove'); 
    	       
		$('#timer').timer({
			format: '%h:%m:%s',
		    duration: '15m',
		    callback: function() {
		        $('#timer').timer('reset');
		        $('#timer').timer('pause');
		        document.getElementById('alarmsound').play();
	    	}	    	

		});		
	});
});




$(function() {
    $('#sleepcycle').hover(function() { 
        $('#sleepcycleinfo').show(); 
    }, function() { 
        $('#sleepcycleinfo').hide(); 
    });
});

$(function() {
    $('#sleepcycle').click(function() {    
    	$('#timer').timer('remove');    
    	 
		$('#timer').timer({
			format: '%h:%m:%s',
		    duration: '90m',
		    callback: function() {
		        $('#timer').timer('reset');
		        $('#timer').timer('pause');
		        document.getElementById('alarmsound').play();
	    	}	    	

		});		
	});
});


$(function() {
    $('#memory').hover(function() { 
        $('#memoryinfo').show(); 
    }, function() { 
        $('#memoryinfo').hide(); 
    });
});

$(function() {
    $('#memory').click(function() {  
    	$('#timer').timer('remove');  
    	      
		$('#timer').timer({
			format: '%h:%m:%s',
		    duration: '60m',
		    callback: function() {
		        $('#timer').timer('reset');
		        $('#timer').timer('pause');
		        document.getElementById('alarmsound').play();
	    	}	    	

		});		
	});
});


