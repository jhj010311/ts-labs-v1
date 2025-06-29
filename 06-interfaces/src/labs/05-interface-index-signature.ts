// [문제]
// 여러 나라의 수도를 저장하는 객체 capitals를 만들고자 한다.
// 임의의 문자열 key(나라 이름)에 대해, 값은 문자열(수도명)인 인덱스 시그니처 인터페이스를 작성하라.
// 아래 코드가 에러 없이 동작해야 한다.

interface Capitals {
    [key: string]: string;
}

const capitals: Capitals = {
    한국: "서울",
    일본: "도쿄",
};

capitals.프랑스 = "파리";
console.log(capitals.일본); // "도쿄"
