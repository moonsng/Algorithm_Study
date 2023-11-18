function solution(my_string, indices) {
    // 인덱스 배열을 정렬
    indices.sort((a, b) => a - b);
    
    // 문자열을 배열로 변환
    let arr = my_string.split("");

    // 정렬된 인덱스에 해당하는 문자를 제거
    for (let i = indices.length - 1; i >= 0; i--) {
        arr.splice(indices[i], 1);
    }

    // 배열을 문자열로 변환하여 반환
    return arr.join('');
}
