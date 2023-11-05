function solution(s){
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if( s[i] === '('){
            count += 1
        }else{
             if (count === 0) return false;
            count -= 1
        }
       // count += s[i] === '(' ? 1 : -1;
       
    }
    return count === 0 ? true : false;
}