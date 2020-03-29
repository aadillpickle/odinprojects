const palindromes = function(s) {
    var even = s.length % 2 === 0 ? true : false;
    var middle = Math.ceil(s.length / 2);
    var start = s.substring(0, middle-1);

    if (even)
    {
        var evenEnd = s.substring(middle, s.length).split("").reverse().join("");
        if (start.toLowerCase() === evenEnd.toLowerCase())
        {
            return true;
        }
        return false
    }
    else
    {
        var oddEnd = s.substring(middle, s.length).split("").reverse().join("");
        if (start.toLowerCase() === oddEnd.toLowerCase())
        {
            return true;
        }
        return false
    }
}
module.exports = palindromes
