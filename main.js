const play = document.querySelector('.play_btn');
const ten = document.querySelector('.ten');

let time = 0;
let count = 10;

play.addEventListener('click', () => {
    // start 아이콘을 pause 아이콘으로 변경
    clearInterval(time);
    time = setInterval("startTimer()", 1000);
});

function startTimer() {
    count = count - 1;
    ten.innerHTML = count;
    console.log(count);
    if(count <= 0) {
        clearInterval(time);
        alert('시간초과');
        return;
    }
}

// play버튼 재클릭시 count가 -1이 되는게 출력되어 보여지는 오류