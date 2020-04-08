

class Word {

    constructor(word, follower) {
        this.word = word
        this.followers = []
        this.followers.push(follower)
    }


    addFollower(word) {
        this.followers.push(word)
    }


}