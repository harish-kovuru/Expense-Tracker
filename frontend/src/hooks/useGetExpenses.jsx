import { setExpenses } from "@/redux/expenseSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetExpenses=()=>{
   const dispatch= useDispatch();
   const{category,markAsDone} = useSelector(store=>store.expense);

   useEffect(()=>{
    const fetchExpenses = async()=>{
        try {
            axios.defaults.withCredentials=true;
            const res = await axios.get(`http://localhost:8000/api/v1/expense/getall?category=${category}&done=${markAsDone}`);
            console.log(res);
            
            if(res.data.success){
                dispatch(setExpenses(res.data.expense));
            }
            if (!res.data.success) {
                toast.error("Failed to fetch expenses");
            }
        } catch (error) {
            console.log(error);            
        }
    };
    fetchExpenses();
   },[category, markAsDone, dispatch]);
}

export default useGetExpenses;