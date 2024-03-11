const button = document.querySelector('#go');

button.addEventListener('click', function name(params) {
	let url = document.querySelector('#url').value;
	
	switch (true) {
		case /^https.+/.test(url):
			document.location.href = url;
			break;
		case /^http[^s].+/.test(url):
			document.location.href = url.replace('http', 'https');
			break;
		case /^www.+/.test(url):
			document.location.href = `https://${url}`;
			break;
		default:
			alert('Invalid url');
			break;
	}
})

