const happyNumber = (n) => {
  var sum = [];
  while(n != 1){
    let arr = n.toString().split('');
  let s=0
  arr.map(num => {
    s+=Number(num)*Number(num)
  })
    n=s;
    sum.push(s);
  }
  return n == 1 ? true : false;
  
}
console.log(happyNumber(7))