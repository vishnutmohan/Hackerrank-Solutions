inputArray = ["add hackerrank", "add hack", "find hac", "find hak"]

contacts = []
for ele in inputArray:
    opContact = ele.split()
    if("add" in opContact):
        contacts.append(opContact[1])
    if("find" in opContact):
        matching = [str for str in contacts if opContact[1] in str]
        print len(matching)