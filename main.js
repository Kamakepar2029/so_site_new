var input_email = document.getElementsByClassName('analyse_input')[0];
var btn_analyze = document.getElementsByClassName('btn_new_analyze')[0];
function get_url(url){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	if (xhr.status != 200) {
		//console.log( xhr.status + ': ' + xhr.statusText );
		return ('Error: '+xhr.status);
	} else {
		return( xhr.responseText );
	}
}
btn_analyze.onclick = function() {
	var email = input_email.value;
	if (email.includes('@')){
    var t = get_url('https://servereasyget.kamakepar.repl.co/somenrolen?mail='+email+'&service=havepwned');
		if (t){
			alert(t);
			console.log(t);
		}
	}else{
		send_notify('Error','Invalid Email', 'error');
	}
}