function solution(a, d, included) {
    let n = included.length
    const r = []
    const answer = []
    let sum  = 0
    
    for(let i =0; i<n;  i++){
        let ip = i + 1
        r.push(a)
        a += d
        if(included[i] == true){
             sum += r[i]
        }
       
    }
    console.log(r,sum)
    return sum
}