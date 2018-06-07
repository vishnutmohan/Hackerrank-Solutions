import datetime

now = datetime.datetime.now()

# para = " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

# str = ""
# for i in range(1000):
#     str = str+para

file = open('helloworld.txt','r')
str =  file.read()
file.close()

inputTime = datetime.datetime.now()

arr = []

for x in str.split(" "):
    arr.append(x[::-1])

arr = " ".join(arr)

print arr

outputTime = datetime.datetime.now()

print outputTime-inputTime

print outputTime.microsecond-inputTime.microsecond
