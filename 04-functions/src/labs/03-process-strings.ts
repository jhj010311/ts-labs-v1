// [문제] 문자열 변환 파이프라인 함수
// 문자열 배열과 변환 함수(transform: string => string)를 받아
// 각 요소를 변환 함수로 처리해 새 배열로 반환하는 processStrings 함수를 작성하세요.
// transform 함수 타입은 type alias로 선언하세요.

/*
예시)
const shout = (str: string) => str + '!';
processStrings(['hi', 'bye'], shout) // ['hi!', 'bye!']
*/

type Transform = (str: string) => string;

const shout: Transform = (str: string) => str + "!";
const ask: Transform = (str: string) => str + "?";

function processStrings(str: string[], trans: Transform): string[] {
    let result: string[] = [];

    for (let s of str) {
        result.push(trans(s));
    }

    return result;
}

console.log(processStrings(["hi", "bye"], shout));
console.log(processStrings(["howdy", "leaving"], ask));
