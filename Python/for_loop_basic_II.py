# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]

def biggie(list):
    for i in range(0,len(list)):
        if list[i] > 0:
            list[i] = "big"
    return list

print(biggie([-1,3,5,-5]))

# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it

def count(list):
    sum = 0
    for i in range(0,len(list)):
        if list[i] > 0:
            sum += 1
    
    list[len(list)-1] = sum

    return list

print(count([-1,1,1,1]))

# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7

def sum(list):
    sum = 0
    for i in list:
        sum += i
    
    return sum

print(sum([1,2,3,4]))

# Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5

def average(list):
    sum = 0
    for i in list:
        sum += i
    
    return sum/len(list)

print(average([1,2,3,4]))

# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0

def length(list):
    return len(list)

print(length([]))

# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False

def min(string):
    if len(string) == 0:
        return False
    else: 
        val=0
        for i in string:
            if i < val:
                val = i
    return val

print(min([37,2,1,-9])) 

# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False

def max(string):
    if len(string) == 0:
        return False
    else: 
        val=0
        for i in string:
            if i > val:
                val = i
    return val

print(max([37,2,1,-9])) 

# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }

def ultimate(string):
    total = 0
    min = 0
    max = 0
    long = len(string)
    for i in string:
        total += i
        if i<min:
            min = i
        if i>max:
            max = i
    avg = total/long

    return {'sum_total': total, 'average': avg, 'minimum': min, 'maximum': max, 'length': long}

print(ultimate([37,2,1,-9]))

# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]

def reverse(string):
    temp=0
    for i in range(0, int(len(string)/2), 1):
        temp = string[i]
        string[i] = string[len(string)-1-i]
        string[len(string)-1-i] = temp
    return string

print(reverse([1,2,3,4,5]))

