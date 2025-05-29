// 타입스크립트 : 자바스크립트에 정적타입을 추가한 언어
// 터미널에서 tsc [파일명].ts -> js 파일로 컴파일
// node는 자바스크립트 런타임

console.log("hello, world!");

let a: number = 10; // 숫자 타입 지정
let str: string = "hello"; // 문자열 타입 지정

function printLength(str: string) {
    console.log(str.length);
}

printLength("hello");
