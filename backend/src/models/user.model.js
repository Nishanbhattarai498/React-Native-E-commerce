import mongoose from 'mongoose';

const adressSchema=new mongoose.schema({
    label:{
        type:String,
        required:true

    },
    fullName:{
        type:String,
        required:true
    },
    streetAddress:{
        type:String,
        required:true

    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    isDefault: {
        type:boolean,
        default:false,
    },


})


const userSchema =new mongoose.schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        

    },
    imageUrl:{
        type:String,
        default:""
    },
    clerkId:{
        type:String,
        unique:true,
        required:true
    },
    addresses:[adressSchema],

    wishlist:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ]
},{timestamps:true}
);

export const User=mongoose.model("User",userSchema)