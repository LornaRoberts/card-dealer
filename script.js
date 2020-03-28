function getCard(){

let num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let type= ["spades", "clubs", "hearts", "diamonds"];

let i = Math.floor(Math.random() * type.length);
let j = Math.floor(Math.random()* num.length);

return {value: num[j], suite:type[i]} 
}

getCard();