# Basic - Print all integers from 0 to 150.

def integers(start, finish):
    for i in range(start, finish+1):
        print(i)
    print("***************")

integers(0,150)

# Multiples of Five - Print all the multiples of 5 from 5 to 1,000

def mult_of_5(max):
    for i in range(5,max+1,5):
        print(i)

    print("***************")

mult_of_5(1000)

# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".

def count_dojo_way(max):
    for i in range(1, max+1):
        if i % 10 == 0:
            print("Coding Dojo")
        elif i % 5 == 0:
            print("Coding")
        else:
            print(i)

    print("***************")

count_dojo_way(100)

# Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.

def huge(max):
    sum = 0
    for i in range (0,max+1):
        if i%2!=0:
            sum += i
    
    print(sum)
    print("***************")

huge(500000)

# Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.

def count_down(start,incr):
    for i in range(start,-1,-incr):
        print(i)

    print("***************")

count_down(2018,4)


# Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)

def flex_counter(low_num, high_num, mult):
    for i in range(low_num, high_num+1):
        if i % mult == 0:
            print(i)

flex_counter(2,9,3)