const catculateAge = (birthday) => {
  // Given a date, return the age of the person with that birthday, in years, months, and days
  var array1 = [];
  var array2 = []; 
  let today = new Date();

  array1 = [birthday.getMonth()+1, birthday.getDate(), birthday.getFullYear()];
  array2 = [today.getMonth()+1, today.getDate(), today.getFullYear()];

  // console.log(array2);
  // console.log(array1);
  array2[0] = array2[0]- array1[0];
  if(array2[0] < 0)
  {
    array2[0] = 12 + array2[0];
    array2[1]--;
    array2[1] = array2[1]- array1[1];
  }
  else
  {
    array2[1] = array2[1]- array1[1];
  }
  if(array2[1] < 0)
  {
    array2[1] = 30 + array2[1];
    array2[2]--; 
    array2[2] = array2[2]- array1[2];
  }
  else
  {
    array2[2] = array2[2]- array1[2];
  }
  return "Age: " +array2[2]+ " years, " + array2[0] + " months, " + array2[0]+ " days";
};

// Date formats
let birthday = new Date('June 30, 2021')
// new Date('1995-12-17')
// new Date(1995, 11, 17)
// new Date(628021800000)

console.log(catculateAge(birthday));
// Age: 25 years, 4 months, 3 days
// Age: 25 years, 1 day
// Age: 4 months, 10 days
// Error: invalid input provided
