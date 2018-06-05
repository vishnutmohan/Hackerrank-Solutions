from collections import Counter
magazineInput = "two times three is not four"
ransomInput = "two times two is four"
def ransom_note(magazine, rasom):
    print (Counter(rasom) - Counter(magazine))
    return (Counter(rasom) - Counter(magazine)) == {}

if __name__ == '__main__':
    # mn = raw_input().split()

    # m = int(mn[0])

    # n = int(mn[1])

    magazine_input = magazineInput.rstrip().split()

    ransom_input = ransomInput.rstrip().split() 

    if(ransom_note(magazine_input, ransom_input)):
        print ("Yes")
    else:
        print ("No")