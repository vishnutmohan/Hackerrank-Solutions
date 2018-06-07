function isBracketMatching(inputSting) {
    let inputArray = [];
    for (let i = 0; i < inputSting.length; i++) {
        if (inputSting.charAt(i) === "(")
            inputArray.push(")");
        else if (inputSting.charAt(i) === "{")
            inputArray.push("}")
        else if (inputSting.charAt(i) === "[")
            inputArray.push("]")
        else {
            if (inputArray.length === 0 || inputSting.charAt(i) != inputArray[inputArray.length - 1])
                return false
            inputArray.pop();
        }
    }
    if (inputArray.length === 0)
        return true
}

var inputSting = "{{[[(())]]}]";

if (isBracketMatching(inputSting))
    console.log("YES")
else
    console.log("NO")