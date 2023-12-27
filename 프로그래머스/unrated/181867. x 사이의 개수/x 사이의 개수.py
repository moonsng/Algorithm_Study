def solution(myString):
    s = myString.split("x")
    print(s)
    cnt = 0
    answer = []
    for i in s:
        answer.append(len(i))
    return answer
        