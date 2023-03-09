
//전역 변수와 지역 변수의 차이를 설명해주는 코드로 분석함.

const globalValue = 1000; //전역변수로 선언된 globalValue는 함수 내에서 사용이 가능
function outerFunc() {
  let outerValue = 100;
  function innerFunc() {
    let innerLocalValue = 30;
    return innerLocalValue;
  }
  return globalValue + outerValue + innerFunc();
}
console.log(outerFunc());

