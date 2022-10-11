
value = 20

def a():
    global value
    value = value + 10
    print("a, 30? value: %d" % value)

def b():
    print("b, 20? va]ue: %d" % value)

a()
b()