let convertBtn = document.getElementById('downloadButton');
let URLinput = document.getElementById('urlBox');

convertBtn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);	
	sendURL(URLinput.value);
});

function sendURL(URL) {
	window.location.href = `https://node-api-wvc0.onrender.com/download?URL=${URL}`;
	// window.location.href = `http://localhost:4000/download?URL=${URL}`;
}

