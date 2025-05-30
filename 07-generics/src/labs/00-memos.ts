// Generic

// 타입을 나중에(사용 시점ㅇ) "결정" 하는 문법
// 코드 재사용성, 타입 안정성 향상

// function echo(value: T): T {
//     return value;
// }
// 제네릭 타입임을 미리 알려줘야 한다

function echo<T>(value: T): T {
    return value;
}

type FirstElement<T> = (arr: T[]) => T;

const getFirst: FirstElement<string> = (arr) => arr[0];
console.log(
    'getFirst(["string", "number"]) :>> ',
    getFirst(["string", "number"])
);
