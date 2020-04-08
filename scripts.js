

var inputFiles = []         //array of input files

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
function generateText(input) {

}