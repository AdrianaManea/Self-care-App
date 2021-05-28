const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 10000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
// console.log(breatheTime, holdTime);


const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

(async function breathAnimation() {
  // console.log('Breathe In!');
  text.innerText = 'Breathe In!';
  container.className = 'container grow';
  await wait(breatheTime);

  text.innerText = 'Hold';
  await wait(holdTime);

  text.innerText = 'Breathe Out!';
  container.className = 'container shrink';
  await wait(breatheTime);

  breathAnimation();
})();