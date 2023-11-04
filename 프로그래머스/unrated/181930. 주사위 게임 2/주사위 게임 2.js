function solution(a, b, c) {
    let sum = 0
    if(a !== b && b !== c && a !== c){
     sum = a + b + c
        return sum
    }else if ( a == b && b ==c && a == c){
        sum = (a + b + c) * (a*a + b*b + c*c ) * (a*a*a + b*b*b + c*c*c)
        return sum
    }else {
        sum =(a + b + c) * (a*a + b*b + c*c ) 
        return sum
    }
}