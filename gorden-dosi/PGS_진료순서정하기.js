// 진료순서 정하기 https://school.programmers.co.kr/learn/courses/30/lessons/120835
function solution(emergency) {
    // emergency 배열을 내림차순으로 정렬
  const sortedEmergency = [...emergency].sort((a,b) => b-a)
  console.log(sortedEmergency)
  // 원본 배열의 요소를 정렬된 배열에서의 몇 번째 인덱스인지 판별 후 순위 메기기
  
  return emergency.map((a,_) => sortedEmergency.indexOf(a)+1)
}

// function solution(emergency) {
//     // 복사한 배열을 내림차순 정렬한다
//     const copiedEmergency = [...emergency].sort((a, b) => b - a);
//     console.log(copiedEmergency)
//     // 진료순위를 기록할 배열을 만든다
//     let rankArr = new Array(emergency.length).fill(0);
//     console.log(rankArr)
//     // 진료 순위
//     let count = 1;
    
//     for(let i = 0; i < emergency.length; i++){
//         // 내림차순된 배열은 가장 우선 순위가 높은 사람이 맨 앞에 있으므로
//         // 원본 배열에서 그 사람의 인덱스를 찾는다
//         let index = emergency.indexOf(copiedEmergency[i]);
//         console.log(index)
//         // 진료순위 배열에서 해당 인덱스 자리에 진료 순위를 기록한다
//         rankArr.splice(index, 1, count);
//         console.log(rankArr)
//         // 진료 순위를 증가시킨다
//         count++;
//     }
    
//     return rankArr;
// }
// console.log(solution([30, 10, 23, 6, 100]))