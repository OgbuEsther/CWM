import mongoose from "mongoose";

import { adminDetails } from "./allInterfaces";

interface Admin extends adminDetails , mongoose.Document{}


const adminSchema = new mongoose.Schema<adminDetails>({
    name : {
        type : String,
        required : [true , "please enter a name"],
        lowercase : true,
        trim : true

    },
    email :{
        type : String,
        required : [true, "please enter an email"],
        unique : true,
        lowercase : true,
        trim : true
    },
    password : {
        type : String,
        required : [true, "please enter a password"],
        minlength : 4,
       
    },
    dashBoard : [
       {
        type : mongoose.Schema.Types.ObjectId,
        ref : "adminDashBoard"
       }
    ]

})


const AdminModel = mongoose.model("adminCollections" , adminSchema);