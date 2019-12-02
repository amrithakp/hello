var express =require('express');
var app = new express();//create the objr instance of express with or without new keyword



app.get('/',function(req,res){
   res.send('hello world');//data pass
})



const port =process.env.PORT||3000
app.listen(port,function(){
    console.log("listening to port 8000");//server app
}); 