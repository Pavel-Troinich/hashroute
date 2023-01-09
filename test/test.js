function StringChallenge(num) { 
 
  let arr = num.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] === 0 || +arr[i + 1] === 0 ) continue;
    if (+arr[i] % 2 === 0 && +arr[i + 1] % 2 === 0) {
      arr.splice(i+1, 0, '*'); 
      ++i;     
    } else if ((+arr[i] % 2) && (+arr[i+1] % 2)) {
      arr.splice(i+1, 0, '-');
      ++i; 
    }
  }
  return arr.join(''); 
 
}
console.log(StringChallenge(readline()));