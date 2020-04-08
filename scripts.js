

var inputFiles = []         //array of input files
var textInput = []          //array of text contents of files 

var filesLoaded = 0         //number of files loaded 

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
async function generateText() {

    console.log("Generating Text...")

    inputFiles.forEach( item => {
        console.log("Parsing file")
        parseFile(item)
    })

    while(filesLoaded != inputFiles.length) { await new Promise(r => setTimeout(r, 1000)) }
    parseInput()

}

//handles keying input text
function parseInput() {

    console.log("Parsing Inputs")
    console.log(inputFiles)
    console.log(textInput)

    textInput.forEach(item => {
        console.log(item)
    })

}

//Adds input to input text array
function addTextInput(inputText) {
    console.log("Pushing: " + inputText)
    textInput.push(inputText)
}


//parses file into text array  
function parseFile(file) {

    if (window.File && window.FileReader && Window.FileList && window.Blob) {
        alert("File Reader APIs not up to date on current browser.")
        return
    }
    
    //create file reader 
    var reader = new FileReader()

    console.log("reading file")

    if(file.files && file.files[0]) {
        reader.onload = function (e) {
          addTextInput(e.target.result)
        }

        reader.readAsText(file.files[0])
    }
    else {
        alert("Error reading file.")
    }

}