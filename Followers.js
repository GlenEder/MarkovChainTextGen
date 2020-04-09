

class Followers {

    constructor(follower) {
        this.followers = []
        this.followers.push(follower)
    }


    addFollower(word) {
        this.followers.push(word)
    }

    getWord() {
        return this.followers[Math.floor(Math.random() * this.followers.length)]
    }

    getNumFollowers() {
        return this.followers.length
    }


}