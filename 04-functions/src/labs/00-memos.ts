// 함수 선언 방식
// 1) 함수 선언식
// 2) 함수 표현식, 변수 = 함수(값)
// 3) 화살표 함수

function add(a: number, b: number): number {
    return a + b;
}

const sub = function (a: number, b: number): number {
    return a - b;
};

const multiply = (a: number, b: number): number => a * b;

//
//
// 선택적 매개변수
function log(msg: string, userName?: string): void {
    if (userName) {
        console.log(`${userName}: ${msg}`);
    } else {
        console.log(`익명: ${msg}`);
    }
}

log("안녕하세요");
log("안녕하세요", "익명아님");

//
//
// 나머지 매개변수 ...
// ...이 그 표현임
function sumAll(...nums: number[]) {
    return nums.reduce((acc, cur) => acc + cur, 0);
}

//
// 함수에 다형성 느낌 내기

function compute(a: number, b: number, op: (a: number, b: number) => number) {
    // 매개변수를 뭘 받고, 반환을 뭘 하는지 화살표 함수로 표현
    return op(a, b);
}
// 직접 함수 타입을 지정하는 방식

// 타입 별칭을 쓰면 위의 방식을 더 간략화 가능

type OP = (a: number, b: number) => number;

function compute2(a: number, b: number, op: OP) {
    return op(a, b);
}
