let b1 = document.querySelector(".b1");

let startCountDown = document.getElementById("countdown");
startCountDown.addEventListener("click", startCountDownNow);

function startCountDownNow(event) {
  event.preventDefault();
  countDown().then(() => makeWish("Happy Birthday"));
}
startCountDownNow();

async function countDown() {
  let promises = [];
  let time = 5,
    ang = 360;
  for (let i = 5; i >= 0; i--) {
    promises.push(
      new Promise((resolve) => {
        setTimeout(() => {
          b1.style.rotate = `y ${ang}deg`;
          b1.innerHTML = time;
          time--;
          ang += 360;
          resolve(1);
        }, i * 1000);
      })
    );
  }

  await Promise.all(promises);
}

function makeWish(wish) {
  b1.innerHTML = wish;
  b1.style.fontSize = "3rem";
}
