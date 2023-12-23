def solution(num_list):
    result = 0
    for i in num_list:
        while( i != 1):
            if(i%2 == 0):
                i =  i//2
            elif(i%2 == 1):
                i = (i - 1)//2
            result += 1
    return result