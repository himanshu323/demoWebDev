const fs = require('fs');
const http = require('http');
const {promisfy, waitFor} = require('promisfy');
 
// using promisfy
// if you are using some some callbacks without error as its first argument,
// try promisfyNoError()
const readFile = promisfy(fs.readFile);
 
async function main() {
    let content = await readFile('notes.json', {encoding:'utf8'});
    await console.log(content);
    return content;
}
 
main().then(function(content) {
    console.log('myfile:');
    console.log(content);
})