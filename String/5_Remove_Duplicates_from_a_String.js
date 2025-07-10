
/*  
    Remove Duplicates from a String

    Input: "aabbcc" → Output: "abc"
*/


const removeDuplicate = (inputStr) => {
    let  result = "";

    for (let i = 0; i < inputStr.length; i++) {

        let currentChar = inputStr[i];
        
        if (!result.includes(currentChar)) {
            result = result + currentChar;
        }
    }

    console.log(`Original String : ${inputStr}`);
    console.log(`Without duplicate : ${result}`);
    
}


removeDuplicate("ABCDDCBA");