const play = document.querySelector(".play_btn");
const retry = document.querySelector(".retry_btn");
const ten = document.querySelector(".ten");
const carrot = document.querySelectorAll(".carrot");
const bug = document.querySelectorAll(".bug");
const carrotCounter = document.querySelector(".carrot_counter");
const imgAll = document.querySelectorAll("img");
const imgBox = document.querySelector(".img_box");
const failPop = document.querySelector(".fail_pop");
const popTxt = document.querySelector(".pop_text");

let time = 0;
let count = 10;

addEventListener("load", () => {
  randomImage();
  failPop.style.display = "none";
});

// 시작하기
play.addEventListener("click", () => {
  clearInterval(time);
  time = setInterval("startTimer()", 1000);
  play.innerHTML = `<i class="fas fa-pause fa-lg"></i>`;

  pickBug();
  pickCarrot();
});

// 다시하기
retry.addEventListener("click", () => {
  location.reload();
});

// 타이머 실행
function startTimer() {
  count = count - 1;
  ten.innerHTML = count;
  console.log(count);
  if (count <= 0) {
    clearInterval(time);
    play.disabled = true;
  }
  if (count == 0 && carrotCounter != 0) {
    failPop.style.display = "block";
  }
}

// 랜덤 이미지
function randomImage() {
  for (let i = 0; i < imgAll.length; i++) {
    imgAll[i].style.top = `${Math.floor(Math.random() * 200 + 1)}px`;
    imgAll[i].style.left = `${Math.floor(Math.random() * 800 + 1)}px`;
  }
}

// 당근 선택
function pickCarrot() {
  let num = 10;
  for (let i = 0; i < carrot.length; i++) {
    carrot[i].addEventListener("click", () => {
      num = num - 1;
      carrotCounter.innerHTML = num;
      carrot[i].style.display = "none";

      if (num === 0) {
        popTxt.innerHTML = "YOU WIN🎉";
        failPop.style.display = "block";
        clearInterval(time);
      }
    });
  }
}

// 벌레 선택
function pickBug() {
  for (let i = 0; i < bug.length; i++) {
    bug[i].addEventListener("click", () => {
      failPop.style.display = "block";
      clearInterval(time);
    });
  }
}
