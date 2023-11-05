function solution(arr) {
    var answer = []
    var sum = 0
    for(let a = 0; a < arr.length; a++){
        sum += arr[a]
    }
    return sum / arr.length
}
