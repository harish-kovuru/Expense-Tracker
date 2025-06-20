import React, { useEffect } from 'react'
import Navbar from './Navbar'
import CreateExpense from './CreateExpense'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useDispatch } from 'react-redux'
import { setCategory, setMarkAsDone } from '@/redux/expenseSlice'
import useGetExpenses from '@/hooks/useGetExpenses'
import ExpenseTable from './ExpenseTable'


const Home = () => {
  useGetExpenses();
  const dispatch = useDispatch();
  
  const  user  = true;
  useEffect(() => {
    
  }, [user]);
  const changeCategoryHandler = (value)=>{
    dispatch(setCategory(value));
  }
  const markDoneHandler = (value)=>{
    dispatch(setMarkAsDone(value));
  }
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto mt-6'>
        <div className='flex item-center justify-between mb-5'>
          <p>expense</p>
          <CreateExpense />
        </div>
        <div className='flex item-center gap-4'>
        <h1 className='font-medium text-lg'>Filter By :</h1>
        <Select onValueChange={changeCategoryHandler}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="rent">Rent</SelectItem>
              <SelectItem value="groceries">Groceries</SelectItem>
              <SelectItem value="shopping">Shopping</SelectItem>
              <SelectItem value="EMI">EMI</SelectItem>
              <SelectItem value="tutionFee">TutionFee</SelectItem>
              <SelectItem value="All">All</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={markDoneHandler}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Mark As" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="done">Done</SelectItem>
              <SelectItem value="undone">Undone</SelectItem>
              <SelectItem value="both">Both</SelectItem>      
            </SelectGroup>
          </SelectContent>
        </Select>
        </div>
       <ExpenseTable/>
      </div>

    </div>
  )
}

export default Home