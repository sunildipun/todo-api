const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TODOAPP', (err, db) =>{
    if(err){
        console.log("Unable to connect MongoDB Server")
    }
    console.log("Connected to MongoDB server");

    db.collection('Todos').insertOne({
        text: "Something to do today",
        completed: false
    },(err, result)=>{
        if(err){
            return console.log("Inable to insert todo",err)
        }
        console.log(JSON.stringify(result.ops), undefined , 2);
    });

    db.collection('Users').insertOne({
        name: "Sunil Behera",
        age: 23,
        location:"Bangalore"
    },(err, result)=>{
        if(err){
            return console.log("Inable to insert User",err)
        }
        console.log(JSON.stringify(result.ops, undefined , 2));
    });


    db.close();
}); 