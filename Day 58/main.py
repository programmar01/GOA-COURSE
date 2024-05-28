smalest_in_list = [7, 9, 2, 3, 5, ]

minimaluri = smalest_in_list[0]

for num in smalest_in_list:
    if num < minimaluri:
        minimaluri = num

print(minimaluri)