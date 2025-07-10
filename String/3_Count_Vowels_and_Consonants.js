
/*  
    Count Vowels and Consonants

    Input: "tejas" → Output: Vowels: 2, Consonants: 3
*/

const countVowelsAndConsonants = (word) => {

    let vowels = "";
    let consonants = "";

    for (let i = 0; i <= word.length; i++) {
        
        if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U" || 
            word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
            vowels++;
        }
        else {
            consonants++;
        }
    }

    console.log(`Number of Vowels : ${vowels} And number of Consonants : ${consonants} in word '${word}'.`);    
} 

countVowelsAndConsonants("Tejas");

