const globalValue = 1000;
function outerFunc() {
  let outerValue = 100;
  function innerFunc() {
    let innerLocalValue = 30;
    return innerLocalValue;
  }
  return globalValue + outerValue + innerFunc();
}
console.log(outerFunc());