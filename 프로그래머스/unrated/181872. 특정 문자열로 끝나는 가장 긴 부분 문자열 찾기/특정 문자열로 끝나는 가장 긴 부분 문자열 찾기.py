def solution(myString, pat):
    result = ""
    last_index = myString.rfind(pat)  # pat의 마지막 등장 위치를 찾습니다.

    if last_index != -1:  # pat가 myString 안에 존재하면
        result = myString[:last_index + len(pat)]  # pat의 마지막 등장 위치까지 잘라냅니다.
    
    return result