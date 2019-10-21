
var n = 10

for (let i = 2; i < n; i++) {
  for (x = 2; x <= i; x++) {
    if (i % x != 0) {
      console.log(i)
    } 
  }
}

// i is numbers from 2 to n, x is for every i