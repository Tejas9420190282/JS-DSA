
// Reverse_String.js
/* 
    Reverse a String

    Input: "hello" → Output: "olleh" 
*/

const reverseFun = (word) => {

    let reverseWord = "";

    for (let i = word.length-1; i >= 0; i--) {
        
        reverseWord = reverseWord + word[i];
    }

    console.log(reverseWord);
}

reverseFun("Hello")