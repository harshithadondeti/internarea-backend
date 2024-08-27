const mongoose=require("mongoose")
const url='mongodb+srv://harshithadondeti:Harshitha%4055@internship.7xmmhgw.mongodb.net/?retryWrites=true&w=majority&appName=internship'
module.exports.connect=()=>{
    mongoose.connect(url, console.log("database is established"))
    }


   
