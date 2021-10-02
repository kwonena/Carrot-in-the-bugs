const play = document.querySelector(".play_btn");
const reply = document.querySelector(".reply_btn");
const ten = document.querySelector(".ten");
const carrot = document.querySelectorAll(".carrot");
const bug = document.querySelectorAll(".bug");
const carrotCounter = document.querySelector(".carrot_counter");
const imgAll = document.querySelectorAll("img");
const imgBox = document.querySelector(".img_box");
const failPop = document.querySelector(".fail_pop");
const popTxt = document.querySelector(".pop_text");

let time = 0;
let count = 10; // test 2sec

addEventListener("load", () => {
  // 모든 이미지 랜덤 배치(새로고침하면 계속 바뀜)
  randomImage();
  failPop.style.display = "none";
});

play.addEventListener("click", () => {
  clearInterval(time);
  time = setInterval("startTimer()", 1000);
  play.innerHTML = `<i class="fas fa-pause fa-lg"></i>`;

  // 당근 모두 클릭시 성공
  //pickBug();
  pickCarrot(); // 함수 동시 실행 안됨
});

reply.addEventListener("click", () => {
  location.reload();
});

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

function randomImage() {
  // 이미지를 랜덤한 위치에 표시
  for (let i = 0; i < imgAll.length; i++) {
    imgAll[i].style.top = `${Math.floor(Math.random() * 200 + 1)}px`;
    imgAll[i].style.left = `${Math.floor(Math.random() * 800 + 1)}px`;
  }
}

function pickCarrot() {
  let num = 10;
  for (let i = 0; i < imgAll.length; i++) {
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

function pickBug() {
  for (let i = 0; i < imgAll.length; i++) {
    bug[i].addEventListener("click", () => {
      failPop.style.display = "block";
      clearInterval(time);
    });
  }
}