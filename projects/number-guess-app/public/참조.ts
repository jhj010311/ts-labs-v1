enum StatusMassge {
    UP = "Up!",
    DOWN = "Down!",
    CORRECT = "정답!",
}
//utils
function getRandomNum(): number {
    return Math.floor(Math.random() * 100) + 1;
}
function getHint(userInput: number, targetNum: number) {
    if (userInput > targetNum) return StatusMassge.DOWN;
    if (userInput < targetNum) return StatusMassge.UP;
    return StatusMassge.CORRECT;
}
function getHistoryElement(
    userInput: number,
    targetNum: number
): HTMLLIElement {
    /*
  This func retrun li Element
    <li>
    <span>## USERINPUT ##</span>
    <span>## MESSAGE ##</span>
    </li>
    */

    const li = document.createElement("li");

    li.innerHTML = `
    <span>${userInput}</span>
    <span>${getHint(userInput, targetNum)}</span>
  `;

    return li;
}

// dom object
const userInputEl = <HTMLInputElement>document.getElementById("guess-input");
const historyListEl = <HTMLUListElement>document.getElementById("history-list");
const resultMsgEl = <HTMLDivElement>document.getElementById("result-msg");
const trialCountEl = <HTMLSpanElement>document.getElementById("trial-count");
const resetBtn = <HTMLButtonElement>document.getElementById("reset-btn");
const guessBtn = <HTMLButtonElement>document.getElementById("guess-btn");
const guessForm = <HTMLButtonElement>document.getElementById("guess-form");

// quiz var
let targetNum = getRandomNum();
let trialCount = 0;

console.log(targetNum);

guessForm.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const userInput = +userInputEl.value;
    userInputEl.value = "";
    trialCount++;

    trialCountEl.textContent = `시도: ${trialCount}회`;

    const newHistory = getHistoryElement(userInput, targetNum);
    historyListEl.prepend(newHistory);

    if (getHint(userInput, targetNum) == StatusMassge.CORRECT) {
        // 정답 -> 결과메시지 텍스트 색상 변경, 리셋버튼 display inline-block AND (guessBtn, inputEl) disabled
        const msg = `정답입니다! 시도 횟수: ${trialCount}회`;
        resultMsgEl.innerText = msg;

        resultMsgEl.style.color = "#368726";
        resetBtn.style.display = "inline-block";
        guessBtn.disabled = true;
        userInputEl.disabled = true;
    } else {
        // 오답
        const msg = `${getHint(userInput, targetNum)}`;
        resultMsgEl.innerText = msg;
    }
});

resetBtn.addEventListener("click", () => {
    // 리셋

    // reset quiz var
    targetNum = getRandomNum();
    trialCount = 0;

    // dom style etc.
    resultMsgEl.style.color = "black";
    resetBtn.style.display = "none";
    guessBtn.disabled = false;
    userInputEl.disabled = false;

    resultMsgEl.innerText = "";
    historyListEl.innerHTML = "";
    trialCountEl.textContent = `시도: ${trialCount}회`;
});
