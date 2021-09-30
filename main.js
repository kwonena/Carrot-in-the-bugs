const play = document.querySelector(".play_btn");
const reply = document.querySelector(".reply_btn");
const ten = document.querySelector(".ten");
const carrot = document.querySelectorAll(".carrot");
const bug = document.querySelectorAll(".bug");
const carrotCounter = document.querySelector(".carrot_counter");
const imgAll = document.querySelectorAll("img");
const imgBox = document.querySelector(".img_box");

let time = 0;
let count = 2; // test 2sec

addEventListener("load", () => {
  // 모든 이미지 랜덤 배치(새로고침하면 계속 바뀜)
  showImage();
});

play.addEventListener("click", () => {
  clearInterval(time);
  time = setInterval("startTimer()", 1000);
  play.innerHTML = `<i class="fas fa-pause"></i>`;

  showImage();
  // 당근 모두 클릭시 성공
  pickCarrot();

  // 시간 초과시 실패

  // 벌레 선택시 실패
  for (let i = 0; i < imgAll.length; i++) {
    bug[i].addEventListener("click", () => {
      // div 팝업 뜨고
      return;
    });
  }
});

reply.addEventListener("click", () => {
  // 재시작시 이미지 재배치
  showImage();
  play.disabled = false;
  play.innerHTML = `<i class="fas fa-play"></i>`;

  // 타이머 초기화
  ten.innerHTML = `10`;
  count = 5;
});

function startTimer() {
  count = count - 1;
  ten.innerHTML = count;
  console.log(count);
  if (count <= 0) {
    clearInterval(time);
    alert("시간초과");
    play.disabled = true;

    if (carrotCounter == 0) {
      console.log("성공!");
    } // 성공팝업
    else {
      console.log("실패");
    }
  }
}

function showImage() {
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
    });
  }
}

// reply, fail div를 평소엔 display: none;으로 하고 있다가
// 실패시 보여주는거

// sucsess, reply(=fail) div 둘다 만들고 둘다 다시하기 버튼 있어야 함
