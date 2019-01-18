// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let counter = 0;
let buildMeUp = [];

function addExcitement(sentence, counter, symbolToAdd) {
    let word = (sentence[counter]); 
    
    if((counter+1) % 3 === 0){
        word  += symbolToAdd;
    }
    console.log(word);
    if (counter != sentence.length-1) {
        addExcitement(sentence, counter+1, symbolToAdd);
    }
    buildMeUp.unshift(word)
}

// Invoke the function and pass in the array
addExcitement(sentence, counter, `?`);
console.table(buildMeUp);


