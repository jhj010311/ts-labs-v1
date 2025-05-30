// 인터페이스

// 1. 인터페이스 선언

// type Uzer = {
//     id: number;
//     name: string;
//     email?: string;
// }

interface User {
    id: number;
    name: string;
    email?: string;
}

// 타입 별칭 선언과 유사함

// 인터페이스 특이사항 - 동일한 이름의 인터페이스를 다른 속성 구성으로 선언어도 만들어짐
// 덮어씌우거나 or로 판단하는 것이 아니라 기존 것과 합해서 판단함
interface User {
    readonly createdAt: Date;
}

const userA: User = {
    id: 1001,
    name: "홍길동",
    createdAt: new Date(),
};

function printUser(user: User) {}

//
//

//
// 2. 함수에서의 인터페이스
interface Add {
    (a: number, b: number): number;
}

type AddType = (a: number, b: number) => number;

// 사용 가능 ---
// 객체 : 인터페이스, 함수 별칭
// 함수 및 기타 : 타입 별칭

// 객체 만들 때는 인터페이스가 선호된다
// 인터페이스로 함수를 못 만드는 건 아니지만 안 하는게 좋다

//
//

//
// 3. 인터페이스 확장(=상속)

interface ApiResponse {
    success: boolean;
    message?: string;
}

interface UserResponse extends ApiResponse, AdditionalInfo {
    user: {
        id: string;
        name: string;
    };
}

interface ProductResponse extends ApiResponse {
    product: {};
}

let userResponse: UserResponse = {
    success: true,
    message: "message...",
    user: {
        id: "1001",
        name: "홍길동",
    },
    info: "정보",
};

// 인터페이스는 타입 별칭도 상속받을 수 있다
type AdditionalInfo = {
    info: string;
};
