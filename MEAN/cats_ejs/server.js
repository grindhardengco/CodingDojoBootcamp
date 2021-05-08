var express = require('express');
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + "/views");
app.set('view engine', "ejs");

app.get('/cats',function(request, response){
    response.render('cats')
})

var cat_array = [
    {name: "Cougar", food: "humans", weight: "100 lbs", habitats: ["low mountains", "deserts", "anywhere there is food"]},
    {name: "Lynx", food: "rabbits", weight: "40 lbs", habitats: ["high mountains", "snow", "hard to get to places"]},
    {name: "Tiger", food: "large mammals", weight: "150 lbs", habitats: ["jungles", "plains", "hot & humid places"]},
]

app.get('/cougar', function(request, response){
    response.render('details', {cat: cat_array[0]});
});
app.get('/lynx', function(request, response){
    response.render('details', {cat: cat_array[1]});
});
app.get('/tiger', function(request, response){
    response.render('details', {cat: cat_array[2]});
});

app.listen(8000, function(){
    console.log("UR listening via port 8k?")
})
