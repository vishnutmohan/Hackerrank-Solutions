function findAnagramLength(string1, string2) {
    var difference = {};
    for (var i = 0; i < string1.length; i++) {
        if (difference[string1.charAt(i)] == undefined)
            difference[string1.charAt(i)] = 0
        difference[string1.charAt(i)] += 1
    }
    for (var i = 0; i < string2.length; i++) {
        if (difference[string2.charAt(i)] == undefined)
            difference[string2.charAt(i)] = 0
        difference[string2.charAt(i)] -= 1
    }
    var anagramLength = 0;
    Object.keys(difference).forEach(function (key) {
        anagramLength+=Math.abs(difference[key]);
    });
    return anagramLength;
}

console.log(findAnagramLength("qeltuiosytrabycsnvdourrbvarooaqhgdaaoovmkonlnrdcpirjckkxkbnydffklhmzwhngyctnuzpjjislsfleiyfmgkwrskqqu", ""))