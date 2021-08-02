let form = document.querySelector('form');

let u_name = document.querySelector('#user_name');
let e_mail = document.querySelector('#email');
let news_y = document.querySelector('#yes');
let news_n = document.querySelector('#no');
let day = document.querySelector('#date'); 
var news_s = 3; 

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code here
  console.log('========= Form Submission =========');
  console.log('Username:', u_name.value);
  console.log('Email:', e_mail.value);
  if(news_s === 1)
  {
    console.log('Newsletter: Yes');
  }  
  else if(news_s === 2)
  {
    console.log('Newsletter: No');
  }
  else
  {
    console.log('Newsletter: no submission')
  }
  if(day.value === '')
  {
    console.log('Date: no submission');
  }
  else
  {
    console.log('Date: ', day.value);
  }
}

news_y.addEventListener('click', () => {news_s = 1;})
news_n.addEventListener('click', () => {news_s = 2;})