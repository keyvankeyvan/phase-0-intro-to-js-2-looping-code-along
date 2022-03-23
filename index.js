// Code your solutions in this file

// PART 1
function writeCards(names) {
    let len = names.length;
    const greetings = [];
    for (let i = 0; i < len; i++){
        greetings.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);    
    }
    return greetings;
}

// PART 2
function countDown(number) {
    for (let i = number; i >= 0; i--){
        console.log(i);
    }
}