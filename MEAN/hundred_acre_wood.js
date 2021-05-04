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

north.tigger = winnie;
west.winnie = piglet;
east.winnie = bees;
north.piglet = owl;
east.owl = robin;
north.winnie = robin;
north.bees = rabbit;
east.robin = rabbit;
east.rabbit = gopher;
north.robin = kanga;
north.kanga = eeyore;
east.eeyore = heffalumps;
west.heffalumps = eeyore;
south.eeyore = kanga;
south.kanga = robin;
west.gopher = rabbit;
west.rabbit = robin;
west.robin = owl;
south.owl = piglet;
south.robin = winnie;
south.rabbit = bees;
west.bees = winnie;
east.piglet = winnie;
south.winnie = tigger;

