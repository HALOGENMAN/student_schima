const mongoose = require("mongoose")

const MONGOOSE_URI = "mongodb+srv://<--username-->:<password>@cluster0.fidtq.mongodb.net/school?retryWrites=true&w=majority"

const Student = require("./Student")

mongoose.connect(MONGOOSE_URI)
    .then(()=>{
        
        console.log("MongoDB is connected");

        const aa = new Student({
            name:"aman",
            contact:"aman@gmail.com",
            subjects:["english","maths","science"],
            society:["green","blue","pink"], //adding dynamic field
            class:7,
            year:2018
        })
        return aa.save()
    }).then(data=>{
        console.log(data)
    })
    .catch(err=>console.log(err))