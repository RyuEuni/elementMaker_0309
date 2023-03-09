const openBracket = '<';
const closeBracket = '>';
const slash = '/';

const tagElement = openBracket + 'div' + closeBracket + 'korea digital training' + openBracket + slash + 'div' + closeBracket;
//변수에 태그 만들때 필요한 문자를 넣어주고 이후에 원하는 태그명과 합쳐줘서 하나의 태그를 제작.
//이를 일일이 써주기엔 번거로우니 아래처럼 함수를 만들어 줌.

function firstTagMaker(tagName, isOnOff){
  let tagString = "";
  if(isOnOff){
    tagString = openBracket + tagName + closeBracket;
  }
  else{
    tagString = openBracket + slash + tagName + closeBracket;
  }

  return tagString;
}

let completeTag = firstTagMaker('div', true) + 'HTML is just String' + firstTagMaker('div', false);

console.log(completeTag);