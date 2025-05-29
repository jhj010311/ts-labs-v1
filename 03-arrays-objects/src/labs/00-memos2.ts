// 객체

let user: { id: number; name: string } = {
    id: 1,
    name: "홍길동",
};

let student: {
    name: string;
    age: number;
    scores: [string, number][];
};

student = {
    name: "홍길동",
    age: 22,
    scores: [
        ["자바스크립트", 50],
        ["자바", 70],
    ],
};

// 선택적 프로퍼티 - 프로퍼티 명에 ?를 붙이면 있어도 좋고 없어도 좋은 요소로 처리
let product: {
    id: number;
    name: string;
    price: number;
    description?: string;
};

product = {
    id: 1,
    name: "아이폰16",
    price: 1000000,
};

// Readonly 속성
let order: {
    userId: number;
    status: string;
    amount: number;
    readonly orderAt: string;
};

order = {
    userId: 101,
    status: "배송중",
    amount: 13000,
    orderAt: "2025-05-29",
};

order.status = "배송완료";
// order.orderAt = "2025-05-30";

//
//
// 열거형(enum)
// 미리 정해준 값들만 사용하는 타입
// 자바스크립트엔 존재하지 않는 문법

// 열거형 사용 목적
// 1) 가독성 향상
// 2) 오류 방지

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

let user2: {
    name: string;
    role: string;
};

user2 = {
    name: "유저",
    role: "admin",
};

let user3: {
    name: string;
    role: Role;
};

user3 = {
    name: "유저",
    role: Role.ADMIN,
};
// 한정된 Role의 가짓수 안에서 선택 가능 + 자동완성 가능
// 또한 실질적인 값 또한 따로 부여 가능

enum Role2 {
    ADMIN, // 0 자동부여
    USER, // 1 자동부여
    GUEST, // 2 자동부여
}

//

enum Status {
    Pending = "pending",
    Success = "success",
    Reject = "reject",
}
