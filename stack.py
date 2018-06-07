def bracket_matching(input_string):
    input_array = []
    for bracket in input_string:
        if bracket == "(":
            input_array.append(")")
        elif bracket == "{":
            input_array.append("}")
        elif bracket == "[":
            input_array.append("]")
        else:
            if(not input_array or bracket != input_array[-1]):
                return False
            input_array.pop()
    if(not input_array):
        return True

if __name__ == '__main__':
    input_string = "{{[[(())]]}}"
    if(bracket_matching(input_string)):
        print "YES"
    else:
        print "NO"