import { Expense } from "../models/expense.model.js";

export const addExpense = async (req,res)=> {
try {
        const {description,amount,category} = req.body;
        const userId = req.id; //current user id
        if(!description || !amount || !category){
            return res.status(400).json({
                message: "All fields are required.",
                success : false
            })
        };
        const expense = await Expense.create({
            description,
            amount,
            category,
            userId
        });
        return res.status(201).json({
            message : "New expense added.",
            success:true,
            expense
        });        
} catch (error) {
    console.log(error);
}
}

export const getAllExpense = async (req,res)=>{
    try {
        console.log("Incoming request:", req.method, req.url);
        console.log("Request Query:", req.query);
        console.log("User ID:", req.id);

        const userId = req.id;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized: Missing user ID", success: false });
        }
        let category = req.query.category || "";
        const done = req.query.done ||"";

        const query = {
            userId
        }
        if(category.toLowerCase()==="all"){
            //no need to filter by category
        } else {
            query.category = {$regex:category, $options:'i'};
        }

        if(done.toLowerCase()==="done"){
            query.done=true;
        } else if(done.toLowerCase()==="undone"){
            query.done=false;
        }

        console.log("MongoDB Query:", query);

        const expense = await Expense.find(query);
        console.log("Expenses Found:", expense);
        if(!expense || expense.length===0){
            return res.status(404).json({
                message : "No expense found.",
                success:false
            })
        };
        return res.status(200).json({
            expense,
            success: true
        });
    } catch (error) {
        console.log(error);
                
    }
}

export const markAsDoneOrUndone = async (req,res)=>{
    try {
        const expenseId = req.params.id;
        const done = req.body;
        const expense= await Expense.findByIdAndUpdate(expenseId, done,{new:true});

        if(!expense){
            return res.status(404).json({
                message:"expense not found.",
                success: false
            })
        };
        return res.status(200).json({
            message:`Expense mark as ${expense.done? 'done':'undone'}.`,
            success:true
        })
    } catch (error) {
        console.log(error);
              
    }
}

export const removeExpense = async (req,res)=>{
    try {
        const expenseId=req.params.id;
        await Expense.findByIdAndDelete(expenseId);
        return res.status(200).json({
            message:"Expense Removed",
            success:true
        })
    } catch (error) {
        console.log(error);         
    }
}

export const updateExpense = async (req,res)=>{
    try {
        const expenseId = req.params.id;
        const {description,amount,category} = req.body;
        const updatedData = {description,amount,category};

        const expense = await Expense.findByIdAndUpdate(expenseId,updatedData,{new:true});
        return res.status(200).json({
            message:"Expense updated",
            expense,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}
