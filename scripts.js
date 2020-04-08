

var inputFiles = []         //array of input files
var textInput = []          //array of text contents of files 

var filesLoaded = 0         //number of files loaded 

//Adds text file to input files array 
function addTextFile() {

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


    inputFiles.forEach( item => {
        parseFile(item)
    })

    while(filesLoaded != inputFiles.length) {
        console.log("here")
         await new Promise(r => setTimeout(r, 1000))
        
    }
    parseInput()

}

//handles keying input text
function parseInput() {

    console.log("Parsing inputs for generator")

    textInput.forEach(item => {
        console.log(item)
    })

}

//Adds input to input text array
function addTextInput(inputText) {
    textInput.push(inputText)
    filesLoaded += 1
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
          addTextInput(e.target.result)
        }

        reader.readAsText(file.files[0])
    }
    else {
        alert("Error reading file.")
    }

}