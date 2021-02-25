(function(){
	emailjs.init("user_3m4DKis93VrnoNf8EUaIR"); //use your USER ID
})();

$('#cthBtn').on('click', function(){
	var templateParams = {
		content: $('#content')
	}

	emailjs.send('service_51gfg6z', 'template_cvrn6le', content)
	.then(function(response) {
		 console.log('SUCCESS!', response.status, response.text);
		 alert('Gửi đến anh rồi nha <3')
	}, function(error) {
		 console.log('FAILED...', error);
	});
});
