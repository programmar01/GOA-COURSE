#first    








# Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.


#////////////////////////////

# def litres(time):
#     return int(time * 0.5)

#////////////////////////////

#/////////////////////////////////////////////////////////////////

#second


# Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

# Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

# Example:
# n= 5, m=5: 25
# n=-5, m=5:  0
# Waiting for translations and Feedback! Thanks!


#///////////////////////////

# def paperwork(n, m):
#     if n < 0:
#         return (0)
#     elif m < 0:
#         return (0)
#     else:
#         return (n * m)
    
#////////////////////////////

#//////////////////////////////////////////////////////////

#third

#////////////////////////////

# def grow(arr):
#     sum = 1
#     for i in arr:
#         sum = sum * i
#     return sum

#////////////////////////////

#//////////////////////////////////////////////////////////

#fourth

#////////////////////////////

# def fake_bin(x):
#     string = ""
#     for i in x:
#         if int(i) >=5:
#             string += "1"
#         else:
#             string += "0"
#     return string

#////////////////////////////

#////////////////////////////////////////////////////////

#fifth



#////////////////////////////

# def count_by(x, n):
#     listn = []
#     for i in range(1,n+1):
#         listn.append(i*x)
#     return listn

#///////////////////////////


#7kiu first

# def to_jaden_case(string):
#     x = string.split()
#     listn = []
#     for i in x:
#         listn.append(i.capitalize())
#     return " ".join(listn)


#7kiu second

# def accum(st):
#     sum = 0
#     num = 1
#     string = ""
#     for i in st:
#         string += i.upper() + i.lower() * sum + " "
#         sum += 1
#     y = string.split()
#     return "-".join(y)



#////////////////////////////////////////////////////////////////////////////////////////





#6 kiu first


# def solution(number):
#     sum = 0
#     for i in range(1,number):
#         if i % 3 == 0 or i % 5 == 0:
#             sum += i
#         if number < 0:
#             return 0
#     return sum
















#6kiu last

#////////////////////////////////////////////////////////

# def likes(names):
#     n = len(names)
#     if not names:
#         return "no one likes this"
#     if n == 1:
#         return f"{names[0]} likes this"
#     if n == 2:
#         return f"{names[0]} and {names[1]} like this"
#     if n == 3:
#         return f"{names[0]}, {names[1]} and {names[2]} like this"

    
#     return f"{names[0]}, {names[1]} and {n - 2} others like this"

#////////////////////////////////////////////////////////

#//////////////////////////////////////////////////////////////////////////////////////////









#dificult 


# def is_pangram(s):
#     y = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
#     count = 0
#     x = set()
#     for z in s.lower():
#         if z in y:
#             x.add(z)
#         else:
#             pass
#     for i in x:
#         count += 1
#     if count == 26:
#         return True
#     else:
#         return False
    