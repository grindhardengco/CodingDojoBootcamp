class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        if (this.value == 11){
            this.rank = 'Jack';
        }
        else if(this.value == 12){
            this.rank = "Queen";
        }
        else if(this.value == 13){
            this.rank = "King";
        }
        else if(this.value == 1){
            this.rank = "Ace";
        }
        else{
            this.rank = this.value.toString();
        }
    }
    cardName(){
        let card = {
            name: `${this.rank} of ${this.suit}s`,
            value: this.value,
        }
        return card;
    }
}

class Deck{
    constructor(){
        this.suits = ['spade', 'club', 'heart', 'diamond'];
        this.values = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        this.contents = []

        for(let suit of this.suits){
            for(let value of this.values){
                this.contents.push(new Card(suit, value).cardName());
            }
        }
    }
    shuffle(){
        for (let i=0; i<this.contents.length; i++){
            let x = Math.floor(Math.random()*this.contents.length);
            [this.contents[i], this.contents[x]] = [this.contents[x], this.contents[i]];
        }
    }
    dealCard(player){
        // let toDeal = [];
        let x = Math.floor(Math.random()*this.contents.length);
        player.addCard(this.contents.splice(x,1)[0]);
        
    }

    discard(card){
        this.discard = [];
        this.discard.push(card);
    }

}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    addCard(card){
        this.hand.push(card)
    }
    showHand(){
        console.log(`${this.name}'s hand consists of ${this.hand}.`)
    }
    discard(nameOfCard, deck){
        // console.log(deck);
        //try passing through deck as a means of sending the discarded card to the discard array...
        for (let i=0; i<this.hand.length; i++){
            console.log(this.hand[i].name);
            if(nameOfCard == this.hand[i].name){
                this.hand.splice(i,1);
            }
            else{
                console.log(`The ${nameOfCard} is not in your hand.`)
            }
        }
    }
}

var game = new Deck();
// // console.log(deal.contents);
game.shuffle();
// // console.log(game.contents);
var player1 = new Player("Player 1");
// console.log(game.contents.length)
game.dealCard(player1);
console.log(player1.hand);
// console.log(game.contents.length);