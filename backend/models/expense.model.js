import mongoose from "mongoose";
const expenseSchema = new mongoose.Schema({
    description :{
        type : String,
        required : true
    },
    amount:{
        type : String,
        required : true
    },
    category:{
        type : String,
        required : true
    },
    done :{
        type : Boolean,
        default : false
    },
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
},{timestamps:true});

export const Expense = new mongoose.model('Expense',expenseSchema);