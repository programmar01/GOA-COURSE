def triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b and a == c:
            print("This is an equilateral triangle.")
        elif a == b or a == c or b == c:
            print("This is an isosceles triangle.")
        else:
            print("This is a scalene triangle.")
    else:
        print("These sides cannot form a triangle.")
    

a = int(input("first "))
b = int(input("second "))
c = int(input("third "))

triangle(a, b, c,)