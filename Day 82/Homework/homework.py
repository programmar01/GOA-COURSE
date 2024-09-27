# 1. Sort

def sort(dictionary):
    listn = [key for key, value in dictionary.items()]
    return sorted(listn)

print(sort({1: "Data", 5: "Andria", 3: "Giorgi", 4: "Atuka", 2: "Erekle"}))

# 2. Find Maximum or Minimum Value

def min_and_max(dictionary):
    listn = [value for key, value in dictionary.items()]
    largest = listn[0]
    for i in range(len(listn)):
        if listn[i] > largest:
            largest = listn[i]
        else:
            largest = largest
    minimal = listn[0]
    for i in range(len(listn)):
        if listn[i] < minimal:
            minimal = listn[i]
        else:
            minimal = minimal
    return [minimal, largest]
    
print(min_and_max({'Data': 1, "Andria": 5, "Giorgi": 3, "Atuka": 4, "Erekle": 2}))

# 3. Combining Items

def combine(dict1, dict2):
    dict1.update(dict2)
    return dict1

print(combine({"name": "Data", "last name": "Diasamidze"}, {"age": 16}))

# 4. Check for Key Existence

def check(my_dict,key):
    if my_dict.get(key) != None:
        return "Key is present"
    else:
        return "Key is not present"
    
print(check({"name": "Data"}, "name"))

# 5. Remove and Return Value

def remove_and_return(my_dict, key):
    res = my_dict.pop(key)
    return res

print(remove_and_return({"name": "Data", "last name": "Diasamidze"}, "name"))

# 6. Create a function called manual_keys

def manual_keys(dict):
    res = [key for key, value in dict.items()]
    return res

print(manual_keys({"name": "data", "age": 16}))

# 7. Create a function called manual_values

def manual_values(dict):
    res = [value for key, value in dict.items()]
    return res

print(manual_values({"name": "data", "age": 16}))

# 8. Create a function called manual_items

def manual_items(dict):
    res = [[key, value] for key, value in dict.items()]
    return res

print(manual_items({"name": "data", "age": 16}))

# 9. Create a function called manual_get

def manual_get(dict, key):
    for keys, value in dict.items():
        if key == keys:
            return dict[key]
        
print(manual_get({"name": "data", "age": 16}, "name"))

# 10. Create a function called manual_pop

def manual_pop(dict, key):
    for keys, value in dict.items():
        if key == keys:
            dict.pop(key)
            return dict
        
print(manual_pop({"name": "data", "age": 16}, "name"))