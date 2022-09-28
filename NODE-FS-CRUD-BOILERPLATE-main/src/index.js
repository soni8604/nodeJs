const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName,fileContent);
	console.log("file created")
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.readFile(fileName,"utf-8");
	console.log(data);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName,fileContent);
	console.log("file updated successfully")
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName);
	console.log("file deleted")
}
myFileWriter("file.txt","hello -")
myFileReader("file.txt")
myFileUpdater("file.txt","santosh")
myFileDeleter("file.txt")


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }