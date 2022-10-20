const typed = document.querySelector(".typed");

const title = document.querySelector(".title")

function typeQuote(element, text, speed) {
  let index = 0;
  timer = setInterval(function () {
    if (index < text.length) {
      element.append(text.charAt(index));
      index++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

setTimeout(() => {
  typeQuote(typed, "Hello World.", 220);
}, 4000);

setTimeout(() => {
  typeQuote(title, "welcome to bedros' portfolio page!", 80);
}, 900);


