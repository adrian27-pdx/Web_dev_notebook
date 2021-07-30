const isPrime = (current) => {
  if(current < 2) {
    return false;
  }

  for(var count =2; count < current; count++){
    if(current % count === 0){
      return false;
    }
  }
  return true;
}
const getPrimes = () => {
  // Add your code here
  var start = 2; 
  var end = 100; 
  var flag = 0;
  for(var current =2; current <= end; ++current)
  {
    if(isPrime(current))
    {
      console.log(current);
    }
  }
};

getPrimes();
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...