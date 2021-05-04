var tigger = {
    character: "Tigger",
};

var piglet = {
    character: "Piglet",
};

var winnie = {
    character: "Winnie the Pooh",
};

var bees = {
    character: "Bees",
};

var owl = {
    character: "Owl",
};

var robin = {
    character: "Christopher Robin",
};

var rabbit = {
    character: "Rabbit",
};

var gopher = {
    character: "Gopher",
};

var kanga = {
    character: "Kanga",
};

var eeyore = {
    character: "Eeyore",
};

var heffalumps = {
    character: "Heffalumps",
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

var message = ''

function move(direction){
    if (direction == "north"){
        if(player.location.north == undefined){
            message = "You can NEVER leave!"
            return message;
        }
        player.location = player.location.north;
        message = `You are at the home of ${player.location.character}.`
        return message;
    }
    else if (direction == "south"){
        if(player.location.south == undefined){
            message = "You can NEVER leave!"
            return message;
        }
        player.location = player.location.south;
        message = `You are at the home of ${player.location.character}.`
        return message;
    }
    else if (direction == "west"){
        if(player.location.west == undefined){
            message = "You can NEVER leave!"
            return message;
        }
        player.location = player.location.west;
        message = `You are at the home of ${player.location.character}.`
        return message;
    }
    else if (direction == "east"){
        if(player.location.east == undefined){
            message = "You can NEVER leave!"
            return message;
        }
        player.location = player.location.east;
        message = `You are at the home of ${player.location.character}.`
        return message;
    }
}

var player = {
    location: robin,
};

console.log(player.location.character)
console.log(move("north"))
console.log(move("south"))
console.log(move("south"))
console.log(move("south"))
console.log(move("south"))
console.log(move("south"))