var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

//Print John's age:
console.log(users[1].age);

for(i=0; i<users.length; i++){
    if(users[i].name == "John"){
        console.log(users[i].age);
    }
}

//Print name of the first user:
console.log(users[0].name);

//Print name & age of each user:
for(i=0; i<users.length; i++){
    console.log(users[i].name +" - "+ users[i].age);
}