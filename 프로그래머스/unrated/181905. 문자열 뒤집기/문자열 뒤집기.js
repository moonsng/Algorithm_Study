function solution(my_string, s, e) {
    const substring = my_string.slice(s, e + 1);
    const r= substring.split('').reverse().join('');
    return my_string.slice(0,s) + r + my_string.slice(e+1);
}