// function solution(num_list, n) {
//     var answer = [];
//     let start = [];
//     let end = [];
    
//     start= num_list.slice(n,)
//     end = num_list.slice(0,n)
    
//     console.log(start, end)
    
//     answer.push(...start, ...end)
//     return answer;
// }


function solution(num_list, n) {
    num_list.push(...num_list.splice(0, n));
    return num_list
}