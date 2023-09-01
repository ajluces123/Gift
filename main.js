
let btn = document.querySelector('button'),
video = document.querySelector('video'),
circle = document.querySelector('.circle'),
txt = document.querySelector('h2'),
bg = document.querySelector('body'),
form = document.getElementById('form'),
mp3 = document.getElementById('mp3'),
countdownDisplay = document.getElementById('countdown'),
click = document.getElementById('click'),
figure = document.querySelector('figure');

var count = 3;
var countdownInterval;
 
btn.addEventListener('click', () => {
    btn.style.display = 'none'
    figure.style.display = 'block'
    mp3.play();
    mp3.loop = 'true'
})
click.addEventListener('click', () => {
  click.style.animation = 'none'
  countdownInterval = setInterval(function() {
    countdownDisplay.innerHTML = 'Opening in ' + count;
    count--;
    video.play();


      if (count < 0) {
        clearInterval(countdownInterval);
        countdownDisplay.innerHTML = "0";
        showVideo();
      }
    }, 1000);
})

  function showVideo() {
    bg.style.backgroundColor = 'black'
    figure.style.backgroundColor = 'black'
    figure.style.boxShadow = 'none'
    click.style.display = 'none'
    circle.style.display = 'none'
    video.style.display = 'block';
    txt.innerHTML = ''
    txt.style.color = '#ADADAD'
    txt.style.transform = 'scale(1.4)'
    mp3.pause();
  }
