
var words = new Map()
var cquenceLen = 2

//Ouputs markov text from provided input
function generateText() {

    var textFile = document.getElementById("inputFile")
    console.log(textFile)
    parseFile(textFile)

}

//use word mapping to create text 
function createGoodness() {

    var numPhrases = 100

    //get starting word
    var newShit = getNewWord()
    

    //Save last word for key 
    var lastWord = newShit
    

    for(var i = 0; i < numPhrases - 1; i++) {

        var newWord = ""

        if(words.has(lastWord)) {
            newWord = words.get(lastWord).getWord()
        }
        else {
            var newWord = getNewWord()
        }

        newShit += " "
        newShit += newWord
        lastWord = newWord
       
    }

    console.log(newShit)
    document.getElementById("MarkovText").innerHTML = newShit

}


//Get random word from map
function getNewWord() {

    
    var startAt = Math.floor(Math.random() * words.size)


    //Assign starting word
    var iter = words.keys()
    var newShit = ""
    var pos = 0
    for(var w of iter) {
        newShit = w
        if(pos === startAt) break
        pos++
    }

    return newShit

}

//handles keying input text
function parseInput(input) {

    var started = false
    var begin = 0
    var end = 0

    var phraseLen = 0   //length of current phrase being recorded

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

                if(phraseLen == cquenceLen - 1) {
                    started = false
                    var newWord = input.substring(begin, end + 1)

                    //check if first word to be recorded 
                    if(lastWordSet) {
                    
                        //check map for existing word
                        if(words.has(lastWord)) {

                            words.get(lastWord).addFollower(newWord)

                        }
                        else {
                            words.set(lastWord, new Followers(newWord))
                        }

                        lastWord = newWord

                    }
                    else {
                        lastWord = newWord
                        lastWordSet = true
                    }

                    phraseLen = 0
                }
                else {
                    phraseLen += 1
                }
                
            }
        }
    }


    console.log(words)
    createGoodness()
}

//checks if char is valid for word
function isValidChar(toCheck) {

    var ascii = toCheck.charCodeAt(0)

    //check for letters 
    if( (ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123)) {
        return true
    }

    //Check for puncuation marks
    if(toCheck === '\'' || toCheck === "!" || toCheck === "." || toCheck === "?") {
        return true
    }  

    //Not valid
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