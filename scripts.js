

//Ouputs markov text from provided input
function generateText() {

    var textFile = document.getElementById("inputFile")
    console.log(textFile)
    parseFile(textFile)

}

//handles keying input text
function parseInput(input) {

  console.log(input)

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
          parseInput(e.target.result)
        }

        reader.readAsText(file.files[0])
    }
    else {
        alert("Error reading file.")
    }

}