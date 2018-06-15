def fibo(input):
    if input < 2:
        return input
    return fibo(input-2) + fibo(input-1)
    
print fibo(9);