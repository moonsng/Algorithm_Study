function solution(arr, intervals) {
    var answer = [];
    
    const arr1 = [];
    const arr2 = [];
    
    for(let i = intervals[0][0]; i<= intervals[0][1]; i++){
        arr1.push(arr[i])
        
    }
    
    for(let j = intervals[1][0]; j<= intervals[1][1]; j++){
        arr2.push(arr[j])
    }
    console.log(arr1, arr2)
    answer.push(...arr1)
    answer.push(...arr2)
    return answer;
}