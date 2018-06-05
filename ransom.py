from collections import Counter

def ransom_note(magazine, rasom):
    return (Counter(rasom) - Counter(magazine)) == {}

if __name__ == '__main__':
    mn = raw_input().split()

    m = int(mn[0])

    n = int(mn[1])

    magazine_input = raw_input().rstrip().split()

    ransom_input = raw_input().rstrip().split() 

    if(ransom_note(magazine_input, ransom_input)):
        print ("Yes")
    else:
        print ("No")