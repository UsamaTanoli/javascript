const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());

const play = document.querySelector('#play');
const stop = document.getElementById('stop');

let intervalId; // Store the interval ID here

function changeBackgroundColor() {
  document.body.style.backgroundColor = randomColor();
}

function setInte() {
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopInte() {
  clearInterval(intervalId); // Clear the interval using the stored interval ID
}

play.addEventListener('click', setInte);
stop.addEventListener('click', stopInte);




