const play = document.querySelector('.play_btn');
const reply = document.querySelector('.reply_btn');
const ten = document.querySelector('.ten');
const carrot = document.querySelectorAll('.carrot');
const bug = document.querySelectorAll('bug');
const carrotCounter = document.querySelector('.carrot_counter');

let time = 0;
let count = 2; // test 2sec

play.addEventListener('click', () => {
    clearInterval(time);
    time = setInterval("startTimer()", 1000);
    play.innerHTML = `<i class="fas fa-pause"></i>`;

    // 1. 당근 모두 클릭시 성공

    // 2. 시간 초과시 실패
    // 3. 벌레 선택시 실패
});

reply.addEventListener('click', () => {
    play.disabled = false;
    play.innerHTML = `<i class="fas fa-play"></i>`;

    // 타이머 초기화
    ten.innerHTML = `10`;
    count = 2;
});

function startTimer() {
    count = count - 1;
    ten.innerHTML = count;
    console.log(count);
    if(count <= 0) {
        clearInterval(time);
        alert('시간초과');
        play.disabled = true;
    }
}
