const palindromes = function (word) {
    let swapedWord = "";
    for(let i = word.length -1; i >= 0; i--){
        swapedWord += word[i];
    }
    if (swapedWord === word)
        return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
