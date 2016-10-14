function loadSocket() {
	console.log('Call loadSocket');
	var source = new ReconnectingEventSource('http://api.live.numedia.id/sse/?uuid=pnbpik&fwver=1.0.0&appver=1.0.0');

	source.onmessage = function(e) {
		switch (e.data) {
			case 'CAPTURE':
				$.ajax({
        			url: 'http://api.live.numedia.id/sse/set_executed',
        			crossDomain: true,
        			async: false,
				  	type: "POST",
				  	data: {id: e.lastEventId, uuid: 'pnbpik'},
				  	dataType: 'JSON',
				  	success: function(data) {
				  		if(data.success == true) {
				  			//getCapture();
				  		}
				  	}
				});
				
				break;

        	case 'REBOOT':
        		$.ajax({
        			url: 'http://api.live.numedia.id/sse/set_executed',
        			crossDomain: true,
        			async: false,
				  	type: "POST",
				  	data: {id: e.lastEventId, uuid: 'pnbpik'},
				  	dataType: 'JSON',
				  	success: function(data) {
				  		if(data.success == true) {
							document.location.reload(); 
				  		}
				  	}
				});
        		break;

        	default:
        		
        		break;
        }
	    
	};
}
loadSocket();