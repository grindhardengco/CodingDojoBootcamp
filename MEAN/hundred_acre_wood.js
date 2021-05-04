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

var player = {
    location: robin,
};

function move(direction){
    if (direction == "north"){
        player.location = north;
    }
}