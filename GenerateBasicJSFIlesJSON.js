const path = require('path');
const fs = require('fs');
//joining path of directory
const directoryPath = path.join(__dirname, 'basicsJS');
//passsing directoryPath and callback function

const filesToBeOmmited = ['index.html', 'files.json'];
fs.readdir(directoryPath, function (err, files) {
	//handling error
	if (err) {
		return console.log('Unable to scan directory: ' + err);
	}
	//listing all files using forEach
	const filesArray = files.filter(function (file) {
		if (!filesToBeOmmited.includes(file)) {
			return file;
		}
	});
	fs.writeFile(
		directoryPath + '/files.json',
		JSON.stringify(filesArray),
		'utf8',
		() => console.log('file genrated!', filesArray)
	);
});
