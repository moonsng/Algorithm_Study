def solution(my_string):
    answer = my_string.split(' ')
    arr = []
    for i in answer:
        if i != '':
            arr.append(i)
    return arr