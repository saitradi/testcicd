var express = require('express');
var app=express();
var server=app.listen(4000,function(){
    console.log("Server started on port 4000");
});

app.use(express.static('public'));