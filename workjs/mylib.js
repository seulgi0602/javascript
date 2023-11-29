//모듈 시스템하에서는 하나의 모듈 내에 선언된 개체들은 
//기본적으로 해당 모듈 내에서만 사용가능
//모듈 외부에서 사용할 수 있도록 노출시키고 싶은 개체들은 export명령문을 사용
export var str = 'Hello Module';
var mark = '*';
export function out(msg) {
    console.log(mark,msg,mark);
}
//export default 구문으로 현재 모듈의 기본개체를 내보내기 다능 (모듈당 1개만 가능)
// export default var obj = {x: 123,y: 456}; //x
export default {x: 123,y: 456};
//  var obj = {x: 123,y: 456};
//  export default obj;