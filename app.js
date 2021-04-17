const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let Tab = require("./model"); // requires schema file 


const db = "mongodb+srv://climedo:climedo123@climedo.sarqi.mongodb.net/climedo?retryWrites=true&w=majority";
app.use(express.json());
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to mongodb");
});

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
console.log("Mongoose is connected");
})

mongoose.connection.on('disconnected', function () {//disconnected
console.log("Mongoose is disconnected");
process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
console.log('Mongoose connection error: ', err);
process.exit(1);
})

process.on('SIGINT', function () {/////this function will run jst before app is closing
console.log("app is terminating");
mongoose.connection.close(function () {
    console.log('Mongoose default connection closed');
    connection.removeAllListeners();
    process.exit(0);
});
});


app.get("/tabs",async (request, response)=>{
    try{
        response.send(await Tab.find({}))
        }
        catch (err) {
            console.log(err)
            response.send(err)
        }
})


app.delete("/tabs/:id",async (request, response)=>{
    console.log(request.body.id)
    try{
        x = await Tab.findByIdAndRemove(request.params.id)
        response.send("deleted " + x )
        }
        catch (err) {
            console.log(err)
            response.send(err)
        }
})

app.put("/tabs/:id",async (request, response)=>{
    console.log(request.body.id)
    try{
        x = await Tab.findByIdAndUpdate(
            // the id of the item to find
            request.params.id,
            
            // the change to be made. Mongoose will smartly combine your existing 
            // document with this change, which allows for partial updates too
            request.body,
            
            // an option that asks mongoose to return the updated version 
            // of the document instead of the pre-updated one.
            {new: true},
        )

        response.send("updated" + x)
        }
        catch (err) {
            console.log(err)
            response.send(err)
        }
})


app.post("/tabs",async (request, response)=>{
    console.log(request.body)
    try{
       const new_tab = new Tab({
        name : request.body.name,
        description : request.body.description,
        dataPoints : 
           request.body.dataPoints 
          });
          await new_tab.save();
          console.log(new_tab); //when success it print.
          response.send(new_tab)
        }
        catch (err) {
            console.log(err)
            response.send(err)
        }
})

app.get("/", (request, response)=>{
    response.send("Climedo Test App")
})
  

app.listen(5000,()=>{
    console.log("I am up")
})