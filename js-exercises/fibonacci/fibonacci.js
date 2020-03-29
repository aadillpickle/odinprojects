const fibonacci = function(num) {
    if (num < 0) return "OOPS"
      nextNum = 0
      lastNum = 1
      secondLastNum = 1
      allNums = [1, 1]
  
      for (let i = 0; i < num; i++)
      {
          nextNum = lastNum + secondLastNum //2, 3, 5, 8
          allNums.push(nextNum);
          secondLastNum = lastNum //1, 2, 3
          lastNum = nextNum //2, 3, 5
          
      }
      return allNums[num-1];
  }

module.exports = fibonacci
