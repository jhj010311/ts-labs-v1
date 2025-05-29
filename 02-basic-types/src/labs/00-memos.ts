// tsc -w를 터미널에 입력하면
// 터미널이 가동되는 동안은 파일에 변경이 일어날 경우 tsc로 수동컴파일할 필요 없이 자동으로 컴파일해줌

// 타입스크립트 기본타입

// (1) number
// : number -> 타입 어노테이션
let num: number = 123; // 타입스크립트가 숫자라고 타입을 추론하는 판단을 지정
// 이후 num에 숫자가 아닌 값을 넣으려고 하면 컴파일 에러 발생
// ex) num = "str";

// (2) 문자열
let str: string = "hello";
str = `${num}`;

// str = 123;   -- 에러
str.toUpperCase();
// str.toFixed(); -- toFixed()는 number용 메서드

// (3) boolean
let bool: boolean = true;
// bool = "false"

// (4) null
let nullVar: null = null;
// null도 타입으로 지정 가능
// undefined도 넣을 수 없음

// (5) undefined
let undefinedVar: undefined;
undefinedVar = undefined;
// undefinedVar = null;

// (6) 값 자체가 타입인 - 리터럴 타입
let literalVal: "hello"; // 사용자가 정의한 타입이 된다

literalVal = "hello";
// literalVal = "hi";

// 이후 유니온 타입이라는 것과 연계 가능

// (7) any 타입, unknown 타입
// any : 어느 타입의 값도 입력을 허용하고 바로 사용 가능
// unknown : 비교적 안전한 any >> 바로 사용이 안 됨

let a: any = 123;
a = "string";
a = true;
a = {};
a = [];

// a.toUpperCase();
// any의 경우 현재 숫자가 대입되어있는 변수에 문자열 전용 함수를 불러도 에러표시를 띄워주지 못한다

let b: unknown = 123;
b = "string";
b = true;
b = {};
b = [];

// unknown 타입은 타입을 확인하기 전까지 사용을 제한함
// 타입가드를 거치고 나면 사용 가능

if (typeof b === "string") {
    b.toUpperCase();
}

// (8) void 타입
// 반환값이 없다는 뜻

function returnHello(): string {
    return "hello";
}

// 함수 반환타입 지정이 없으면 void로 추론
function sayHello() {
    console.log("say hello");
    // return undefined;
    // return;
    // void에선 둘 다 암묵적으로 허용(단 그럴 이유가 별로 없음)
}

// 매개변수의 타입도 지정 가능
function echoMsg(msg: string): string {
    return msg;
}

//
//
// (9) never
// 어떤 값도 담을 수 없는 타입
let neverVar: never;

// neverVar = null;
// null조차도 담을 수 없음

// 고의적으로 에러를 발생시키는 경우
function throwError(msg: string): never {
    throw new Error();
}

// 탈출할 수 없는 무한루프를 발생시키는 경우
function infiniteLoop(): never {
    while (true) {
        console.log("...");
    }
}
