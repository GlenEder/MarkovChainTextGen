

var inputFiles = []         //array of input files
var textInput = []          //array of text contents of files 

//Adds text file to input files array 
function addTextFile() {

    console.log("Adding text file")
    var textFile = document.getElementById("inputFile")
    inputFiles.push(textFile)

    console.log(textFile)
    addInputFileToUL(textFile.value)

}

//Adds file name as li to list on website
function addInputFileToUL(fileName) {

    var listItem = document.createElement("li")
    listItem.textContent = fileName
    document.getElementById("inputFiles").appendChild(listItem)
}



//Ouputs markov text from provided input
function generateText() {

    inputFiles.forEach( item => {
        parseFile(item)
    })

}


//parses file into text array  
function parseFile(file) {

    if (window.File && window.FileReader && Window.FileList && window.Blob) {
        alert("File Reader APIs not up to date on current browser.")
        return
    }
    
    //create file reader 
    var reader = new FileReader()

    if(file.files && file.files[0]) {
        reader.onload = function (e) {
            textInput.push(e.target.result)
        }

        reader.readAsText(file.files[0])
    }
    else {
        alert("Error reading file.")
    }



}