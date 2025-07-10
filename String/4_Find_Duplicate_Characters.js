/* 
    Find Duplicate Characters

    Input: "programming" → Output: {'r':2, 'g':2, 'm':2}
 */

const findDuplicateCharacter = (str) => {
    
    let result = "";
    let checked = "";

    for (let i = 0; i < str.length; i++) {
        
        let currentChar = str[i];   // current letter

        // Skip this letter if we already checked it before
        if (checked.includes(currentChar)) {
            continue;
        }

        let count = 0;       // Count how many times this letter appears

        for (let j = 0; j < str.length; j++) {
            
            if (str[j] === currentChar) {
                count++;
            }
        }

        if (count > 1) {
            
            result = result + `${currentChar} appears ${count} times\n`
        }

        checked = checked + currentChar;
    }

    console.log(result);
}

findDuplicateCharacter("Programming");



