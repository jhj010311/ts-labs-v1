// 1. 유니온 타입 '|'
let numOrStr: number | string = "";
numOrStr = 1;

// 2. 인터섹션 타입 '&'

type Person = { name: string };
type Developer = { skills: string[] };
type DevOrPerson = Person | Developer;
type DevPerson = Person & Developer;

const personA: DevOrPerson = {
    name: "개발맨",
    skills: ["자바, 자바스크립트"],

    //// name: "개발맨",
    // skills: ["자바, 자바스크립트"],

    // name: "개발맨",
    //// skills: ["자바, 자바스크립트"],

    // 세 가지 전부 가능
};

const personB: DevPerson = {
    name: "개발맨",
    skills: ["자바, 자바스크립트"],

    // 이 한 가지만 허용
};

//
//

//
// 타입 좁히기에 사용할 수 있는 패턴
// 1) typeof
// 2) null checks
// 3) in
// 4) discriminated union (= tagged union)
// 5) 타입 가드 함수
// 6) instance of

// 선택적 매개변수의 활용
type User = {
    id: string;
    name: string;
};

function print(user?: User): void {
    // if(!user) return;
    console.log(`${user?.id}, ${user?.name}`);
}
// 선택적 매개변수를 받아서 선택적 매개변수로 출력을 결정
// 그리 좋은 방법은 아니지만 가능은 하다
// 애초에 if(!user) return; 처럼 가짓수를 미리 차단하는 것이 좋음

//
//

//
//
// in vs 디스크리미네이티드 유니온(태그 유니온, 서로소 유니온)

type SuccessResponse = { ok: true; data: string };
type ErrorResponse = { ok: false; error: string };
type ApiResponse = SuccessResponse | ErrorResponse;

// 디스크리미네이티드 유니온 방식
function handleResponse(response: ApiResponse) {
    // ok 라는 태그를 이용하여, 유니온 된 타입들 중 어느쪽에 해당하는지 구분
    if (response.ok) {
        console.log(response.data);
    } else {
        console.log(response.error);
    }
}

type SuccessResponse2 = { data: string };
type ErrorResponse2 = { error: string };
type ApiResponse2 = SuccessResponse2 | ErrorResponse2;

// in 방식
function handleResponse2(response: ApiResponse2) {
    if ("data" in response) {
        console.log(response.data);
    } else {
        console.log(response.error);
    }
}

//

//

// 타입 가드 함수
type Guest = { kind: "guest"; visitReason: string };
type Member = { kind: "member"; memberId: string };
type Person3 = Guest | Member;

function printPerson3Info(person: Person3) {
    if (person.kind === "member") {
        console.log(`회원 ID: ${person.memberId}`);
    } else {
        console.log(`방문 목적: ${person.visitReason}`);
    }
}

// 특수 문법 : is
// kind === "member" 이면 얘는 Member야!
// 타입스크립트에게 추론 근거로 확정시켜주기
// >> 단순 boolean 리턴으로는 자동완성이 제대로 나올 정도로 확신하지 못함
function isMember(person: Person3): person is Member {
    return person.kind === "member";
}

function printPerson3Info2(person: Person3) {
    if (isMember(person)) {
        console.log(`회원 ID: ${person.memberId}`);
    } else {
        console.log(`방문 목적: ${person.visitReason}`);
    }
}
