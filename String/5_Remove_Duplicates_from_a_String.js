
/*  
    Remove Duplicates from a String

    Input: "aabbcc" → Output: "abc"
*/

const removeDuplicate = (inputStr) => {

    let final = "";

    for (let i = 0; i <= inputStr.length - 1; i++) {
        
        let currectChar = inputStr[i];

        if (!final.includes(currectChar)) {
            final = final + currectChar;
        }
    }
    
    console.log(`Original Word : ${inputStr}`);
    console.log(`Final Word : ${final}`);
}

removeDuplicate("ABCCBA")