// function convertListToObject(arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 객체 변수 선언
//     // 배열 1개 마다 앞쪽에 있는것은 키로 뒤에 있는 것을 요소로 삽입
//     // 객체를 반환
//     // 배열 안에 배열이 있을 경우 빈 객체 반환.
//     // 같은 키값이 있을 경우 이전 키값으로 반환.
//     let obj = {}
//     let TOF = ''
//     console.log(arr[1][0])
//     if (arr[i][0] === '') {
//     } else {
//         if(for( let i = 0; i < arr.length; i++){
//             for( let ii = 0; ii = arr.length){
//                 if ( i === ii ){}
//                 else if{
//                     if(arr[i][0] === arr[ii][0])
                    
//                 }
//             }
//         }){}
//         else{
//         for (let i = 0; i < arr.length; i++) {
//                 obj[arr[i][0]] = arr[i][1];
//                 console.log(arr[i][0])
//                 console.log(obj[arr[1][0]])
//         }
//     }
//     }
//     return obj;
// }

function convertListToObject(arr) {
    let result = {}; // 배열선언
  
    for (let i = 0; i < arr.length; i++) { // 반복문
      if (arr[i].length > 0 && result[arr[i][0]] === undefined) { // 배열의 길이와 빈 배열 제한
        result[arr[i][0]] = arr[i][1]; 
        console.log(arr[i][0])
        console.log(arr[i][1])
      }
    }
  
    return result;
  }
  
console.log(convertListToObject(
    [['some', 'like'], ['first', 'second'], ['mike', 'ike'], ['first', 'Fox'], ['melee', 'brawl']]));