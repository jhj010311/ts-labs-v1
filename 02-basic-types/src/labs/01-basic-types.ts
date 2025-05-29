// [문제 1] 아래 변수들에 알맞은 타입 표기법(Type Annotation)을 직접 작성하세요.
// 주석 해제 후 문제 풀기

let myAge: number; // 내 나이 (예: 20)
let myName: string; // 내 이름 (예: "윤학생")
let isStudent: boolean; // 학생 여부 (예: true)
let myScore: number; // 점수 (소수점 가능, 예: 99.5)
let myGrade: string; // 학점 (문자 1글자, 예: "A")
let emptyValue: null; // 명시적으로 '없음'을 나타내는 값
let notReady: unknown; // 아직 준비되지 않음을 나타내는 값

// 타입을 잘못 지정하면(예: myAge에 문자열 할당) 타입 에러가 나는지 주석 해제해서 확인해보세요.
// myAge = "스무살";
// myName = 100;
// isStudent = "true";
// myScore = "만점";
// myGrade = 1;
// emptyValue = 0;
notReady = null; // 여긴 딱히 문제 없음
