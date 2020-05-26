let file=require('fs')
file.writeFile('CreatedFile.js','console.log("i am printed using another file")',function(error){
    console.log('data stored')
});