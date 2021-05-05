//Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function display(students){
    for (i=0; i<students.length; i++){
        console.log(`Name: ${students[i].name}, Cohort: ${students[i].cohort}`);
    }
    return false;
}

// display(students);


//Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function charCount(obj){
    for (i=0; i<Object.keys(obj).length; i++){
        console.log(Object.keys(users)[i].toUpperCase())
        for (j=0; j<obj[Object.keys(obj)[i]].length; j++){
            console.log(`${j+1} - ${obj[Object.keys(obj)[i]][j].last_name.toUpperCase()}, ${obj[Object.keys(obj)[i]][j].first_name.toUpperCase()} - ${obj[Object.keys(obj)[i]][j].last_name.length + obj[Object.keys(obj)[i]][j].first_name.length}`);
        }
    }
    return false;
}

charCount(users);