#1. Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
print(x)

students[0]['last_name'] = 'Bryant'
print(students[0])

sports_directory['soccer'][0] = 'Andres'
print(sports_directory['soccer'])

z[0]['y'] = 30
print(z)


#2 Iterate Through a List of Dictionaries
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(students):
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
    for i in range(0,len(students)):
        print(f"first_name - {students[i]['first_name']}, last_name - {students[i]['last_name']}")

iterateDictionary(students)
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel


#3 Get Values from a List of Dictionaries
def iterate_dictionary2(key_name, students):
    for i in range(0,len(students)):
        print(students[i][key_name])

iterate_dictionary2('first_name',students)


#4 Iterate through a dictionary with list values
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dojo):
    print(f"{len(dojo['locations'])} LOCATIONS")
    for i in dojo['locations']:
        print(i)

    print(f"{len(dojo['instructors'])} INSTRUCTORS")
    for i in dojo['instructors']:
        print(i)

printInfo(dojo)
# # output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon