// [문제] typeof 패턴: 입력값 타입 판별 및 처리
// 입력값이 문자열이면 모두 대문자로, 숫자면 세제곱 값 출력

function handleInput(input: string | number): string | number {
    if (typeof input === "string") return input.toUpperCase();
    else return input * input * input;
}

// 사용 예시
// handleInput("hello"); // "HELLO"
// handleInput(2); // 8

console.log(handleInput("hello"));
console.log(handleInput(2));
