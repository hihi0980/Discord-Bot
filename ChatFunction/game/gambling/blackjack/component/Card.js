class Card{
    constructor(suit,number,name){
        this.setSuit(suit);
        this.setNumber(number);
        this.setName(name);
    }
    setSuit(suit){
        if(suit>0&& suit<5){
            this.suit=suit;
        }
        else{
            this.error=true
        }
    }
    setNumber(number){
        if(number>0&&number<14){
            this.number=number;
            
        }
        else{
            this.error=true
        }
    }
    setName(name){
        this.name = name
    }
    getCard(){
        if(this.error==true){
            return false
        }
        let suitarray=[":spades:",":hearts:",":clubs:",":diamonds:"]
        let numarray=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

        return numarray[this.number-1] + " "+ suitarray[this.suit-1]
    }
    getNum(){
        return this.number
    }
    getSuit(){
        return this.suit
    }
    getName(){
        return this.name
    }
    getPoint(){
        switch(this.number){
            case 11:
            case 12:
            case 13: return 10;
            case 1: return 11;
            default : return this.number;
        }
    }
}

module.exports = Card