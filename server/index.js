const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

app.use(cors());

app.listen(4000,() => {
	console.log('Server Works !!! At port 4000');
});

app.get('/download', async (req,res) => {
	let URL = req.query.URL;

	try{
		const info = await ytdl.getBasicInfo(URL);
		const title = info.videoDetails.title;
		res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
		ytdl(URL, { filter: 'audioonly', quality: 'highestaudio' })
		.pipe(res);

	} catch(error) {
		console.log("Error getting the viedo details: ", error);
		res.status(500).send('Error');
	}
  
});