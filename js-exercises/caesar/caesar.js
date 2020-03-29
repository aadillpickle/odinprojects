const caesar = function(s, shift) {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    newS = '';
    var flag = false
    for (let i = 0; i < s.length; i++) {
      if (s[i].match(/[a-z]/i))
      {
        if (s[i] == s[i].toUpperCase())
        {
          flag = true
        }
        letter = s[i].toLowerCase();
        position = letters.indexOf(letter) + shift;
        if (position > 26) 
        {
            position -= 26;
        }
        else if (position < 0)
        {
          position += 26;
        }
        var shiftedLetter = letters[position];
        if (flag)
        {
          shiftedLetter = shiftedLetter.toUpperCase();
        }
        newS += shiftedLetter;
        flag = false
      }
      else
      {
        newS += s[i];
      }
    }
    return newS;
}

module.exports = caesar
