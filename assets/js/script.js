$(function(){
	
	var note = $('#note'),
		ts = new Date(2012, 7, 1),
		deadLine = true;
	
	if((new Date()) > ts){
		ts = (new Date()).getTime() + 60*60*60*60;
		deadLine = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(deadLine){
				message += "until the release!";
			}
			else {
				message += "release is verlengd met ruim 3 uur";
			}
			
			note.html(message);
		}
	});
	
});
