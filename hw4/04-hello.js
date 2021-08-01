// Add your code here
// var title = new HTMLTitleElement();
let card = document.createElement("p");
let pic = document.createElement("img");

pic.src = "http://placekitten.com/200/200";
pic.style.borderRadius = "50%";
pic.style.padding = "0% 50% 0% 50%";

card.textContent = "Hi! My name is Spongebog and this is my introduction. I work as a fry cook and I would like to get my drivers license in the near future, I enjoy hanging out wiht my best friend Patrick.";
card.style.textAlign = "center"; 
card.style.width = "500px";
card.style.padding = "3% 0% 0% 40%";

document.body.append(pic);
document.body.append(card);