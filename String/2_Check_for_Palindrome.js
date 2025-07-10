/* 
Check for Palindrome

Input: "madam" → Output: true

Ignore case and spaces: "A man a plan a canal Panama"
 */

const isPallindrome = (word) => {

    let reverseWord = "";

    for (let i = word.length - 1; i >= word.length; i--) {
        
        reverseWord = reverseWord + word[i];

        if (word === reverseWord) {
            
            console.log(`the given word is Pallindrom....`);
        }
        else {

            console.log(`the given word is not pallindrom`);
        }
    }
}

isPallindrome("ABCBA");

