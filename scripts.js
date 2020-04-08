
var words = new Map()

//Ouputs markov text from provided input
function generateText() {

    var textFile = document.getElementById("inputFile")
    console.log(textFile)
    parseFile(textFile)

}

//handles keying input text
function parseInput(input) {

    var started = false
    var begin = 0
    var end = 0

    var lastWord = ""
    var lastWordSet = false

    for(var i = 0; i < input.length; i++) {


        //check if letter
        if(isValidChar(input.charAt(i))) {

            if(!started) {
                begin = i
                started = true
            }else {
                end = i
            }

        }
        else {
            if(started) {
                started = false
                var newWord = input.substring(begin, end + 1)


                if(lastWordSet) {

                    
                    //check map for existing word
                    if(words.has(lastWord)) {
                        console.log(words.get(lastWord))
                    }
                    else {
                        words.set(lastWord, new Followers(newWord))
                    }

                }
                else {
                    lastWord = newWord
                    lastWordSet = true
                }
            }
        }
    }

}

function isValidChar(toCheck) {

    var ascii = toCheck.charCodeAt(0)
    if( (ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123)) {
        return true
    }

    return false
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