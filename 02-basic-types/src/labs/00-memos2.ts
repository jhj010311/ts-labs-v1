let a = 1;
let b = "hello";

// a: number, b: string으로 자동 추론

a.toFixed();
b.toUpperCase();

//a = "hi";
// 타입스크립트는 변수의 타입을 변수에 값을 넣으면서 선언하는 경우
// 해당 값을 통해서 추론해서 지정하기 때문에 명시적으로 선언한 때와 비슷하게 변경하지 못한다
// 즉 추론할 단서(=값)이 있으면 추론한다
// 값이 없을 경우 any로 추론한다

// 구조 분해 할당
let user: {
    name: string;
    age: number;
};

user = { name: "이름", age: 20 };
let { name, age } = user;
// name은 string으로 추론, age는 number로 추론

let [todo, done] = ["청소하기", false];
// todo는 string으로 추론, done은 boolean으로 추론

// void로 추론
function sayHello() {
    console.log("hello");
}

// string으로 추론
function returnHello() {
    return "hello";
}

// 반드시 모든 것을 명시적으로 선언할 필요는 없음
// 단 명시적으로 선언하는 것이 이후 분간하기는 편함

//
// 매개변수의 타입이 무엇으로 들어올지 추론의 단서가 없을 경우 사용 가능한 방법들
//
// 타입가드를 활용한 범용적인 함수
function add(a: unknown, b: unknown) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
}

// 기본값을 지정하는 것으로 매개변수 타입을 지정
function add2(a = 1, b = 2) {
    return a + b;
}
