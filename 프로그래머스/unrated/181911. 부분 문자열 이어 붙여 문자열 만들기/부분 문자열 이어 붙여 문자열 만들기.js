function solution(my_strings, parts) {
   const arr = []
    for(let i = 0; i<my_strings.length; i++){
        const ms = my_strings[i]
        const p = parts[i]
        arr.push(ms.slice(p[0],p[1]+1))
    }
    return arr.join('')
}