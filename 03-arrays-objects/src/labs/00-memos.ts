let twoDimArr: number[][] = [
    [1, 2, 3],
    [1, 2, 3],
];

let twoDimArr2: (string | number)[][] = [
    [1, 2, "three"],
    [1, 2, "four"],
];

// tuple 사용

let tuple: [number, string] = [10, "20"];

// tuple.push(1); - 이런 것까지 타입스크립트가 막아주지는 못함
tuple[0] = 2;

let tuple2: readonly [number, string] = [1, "hello"];

// tuple2.push(); - 읽기전용은 내부요소를 수정할 수 없음

const tuple3: [number, string] = [1, "hello"];

// tuple3 = [2, "hi"]; - const는 초기화하고 새로 넣는 것만 방지
tuple3.push(1);
