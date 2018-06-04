def anagramlength(string1,string2):
    difference = {}

    for letter in string1:
        if letter not in difference:
            difference[letter] = 0
        difference[letter] += 1
        print difference

    for letter in string2:
        if letter not in difference:
            difference[letter] = 0
        difference[letter] -= 1
        print difference
    print sum(abs(n) for n in difference.values())


if __name__ == "__main__":
    a = raw_input()
    b = raw_input()
    anagramlength(a, b)
