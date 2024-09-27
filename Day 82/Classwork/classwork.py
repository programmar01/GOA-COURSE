def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
    
print(factorial(5))

# task 1

acc_dict = {
    'full name': "Data Diasamidze",
    'gmail': "Dataa19833@gmail.com",
    'address': "Moscow Avenue",
    'password': "dataaa19283"
}

for key, value in acc_dict.items():
    print(key + ": " + value)

# task 2

# def manual_items(dictionary):
#     listn = []
#     for key, value in dictionary.items():
#         listn.append(key + ": " + str(value))
#     return listn

# print(manual_items({'name': 'data', 'age': 16}))

def manual_items(dictionary):
    listn = []
    for i in dictionary:
        listn.append([i, dictionary[i]])

    return listn

print(manual_items({'name': 'data', 'age': 16}))

# task 3

acc_dict = {
    'full name': "Data Diasamidze",
    'gmail': "Dataa19833@gmail.com",
    'address': "Moscow Avenue",
    'password': "dataaa19283"
}

print(acc_dict.get('full name'))

def manual_get(my_dict, item, default = None):
    if item not in my_dict.keys():
        return default
    else:
        return my_dict[item]
    
print(manual_get({'name': 'data', 'age': 16}, "fullname", None))
print(manual_get({'name': 'data', 'age': 16}, "name", None))

# popitem შლის ბოლო ელემენტს
# pop'ს გადაეცემა გასაღების სახელი
def manual_pop(dictionary, remove):
    result = dict()
    for key in dictionary.keys():
        if key == remove:
            pass
        else:
            result[key] = dictionary[key]
    return result

print(manual_pop(acc_dict, 'address'))