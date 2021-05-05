var tigger = {
    character: "Tigger",
    greet: function(){
            console.log("The wonderful thing about Tiggers is that Tiggers are a wonferful thing! Hoo, hoo!")
            },
};

var piglet = {
    character: "Piglet",
    greet: function(){
            console.log("Oh d-d-d-d-dear!")
            },
};

var winnie = {
    character: "Winnie the Pooh",
    greet: function(){
           console.log("Oh... bother!")
            },
};

var bees = {
    character: "Bees",
    greet: function(){
            console.log("BZZZZZZZZZ")
            },
};

var owl = {
    character: "Owl",
    greet: function(){
            console.log("Is it time to wake up?  Nope?  Zzzzzzz...")
            },
};

var robin = {
    character: "Christopher Robin",
    greet: function(){
            console.log("Rats!")
            },
};

var rabbit = {
    character: "Rabbit",
    greet: function(){
            console.log("I love carrots!")
            },
};

var gopher = {
    character: "Gopher",
    greet: function(){
            console.log("The farmer poisoned me again...")
            },
};

var kanga = {
    character: "Kanga",
    greet: function(){
            console.log("Krikey!!")
            },
};

var eeyore = {
    character: "Eeyore",
    greet: function(){
            console.log("Nobody loves, everybody hates me, I'm gonna eat some wooooorms!")
            },
};

var heffalumps = {
    character: "Heffalumps",
    greet: function(){
            console.log("What in the world are we?  (I don't remember this part of WTP.)")
            },
};

tigger.north = winnie;
winnie.west= piglet;
winnie.east = bees;
piglet.north = owl;
owl.east = robin;
winnie.north = robin;
bees.north = rabbit;
robin.east = rabbit;
rabbit.east = gopher;
robin.north = kanga;
kanga.north = eeyore;
eeyore.east = heffalumps;
heffalumps.west = eeyore;
eeyore.south = kanga;
kanga.south = robin;
gopher.west = rabbit;
rabbit.west = robin;
robin.west = owl;
owl.south = piglet;
robin.south = winnie;
rabbit.south = bees;
bees.west = winnie;
piglet.east = winnie;
winnie.south = tigger;

function move(direction){
    if (direction == "north"){
        if(player.location.north == undefined){
            console.log("You can NEVER leave!")
            return false;
        }
        player.location = player.location.north;
    }
    else if (direction == "south"){
        if(player.location.south == undefined){
            console.log("You can NEVER leave!")
            return false;
        }
        player.location = player.location.south;
    }
    else if (direction == "west"){
        if(player.location.west == undefined){
            console.log("You can NEVER leave!")
            return false;
        }
        player.location = player.location.west;
    }
    else if (direction == "east"){
        if(player.location.east == undefined){
            console.log("You can NEVER leave!")
            return false;
        }
        player.location = player.location.east;
    }
    console.log(`You are at the home of ${player.location.character}.`)
    return player.location.greet();
}

var player = {
    location: robin,
    honey: false,
    mission: function (){
                var mission_location = {
                    1: tigger,
                    2: piglet,
                    3: owl,
                    4: robin,
                    5: rabbit,
                    6: gopher,
                    7: kanga,
                    8: eeyore,
                    9: heffalumps,
                    10: bees,
                };
                var mission_start = mission_location[Math.floor(Math.random()*9)+1];
                console.log(`Welcome to Carino de Winnie!\n  See if you can get the honey and deliver it to Winnie.\n  The honey is located at ${mission_start.character}'s house.`);
                return mission_start;
            },
    pickup: function (){
                if (player.location == mission_start){
                    player.honey = true;
                    console.log("You picked up the honey!  Try to bring it to Winnie and drop it off.")
                }
                else{
                    console.log("There is no honey here.  Keep looking...")
                }
            },
        

    
};

// function pickup(){
//     // console.log(player.location);
//     console.log("******************")
//     console.log(mission_location[mission_start]);
//     if (player.location == mission_location[mission_start]){
//         player.honey = true;
//         console.log("You picked up the honey!  Try to bring it to Winnie and drop it off.")
//     }
//     else{
//         console.log("There is no honey here.  Keep looking...")
//     }
// }

function drop(){
    if (player.honey == true && player.location == winnie){
        player.honey = false;
        console.log("Good job!  Winnie is self uncontrollably self-medicating so you can sneak out.")
    }
    else{
        console.log(`This is ${player.location.character}'s house.\n  He doesn't like the high glycemic index of honey.\n Keep moving to Pooh's house.`)
    }
}

var mission_start = player.mission()
player.pickup()
// move("north")
// move("south")
// move("south")
// move("south")
// move("south")
// move("south")