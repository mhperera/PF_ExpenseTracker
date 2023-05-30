import React from 'react'
import ExpenseForm from './ExpenseForm'
import Card from '../../UI/Card'

const NewExpense = (props) => {

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    }
    props.onSaveExpenseData(expenseData); // pass data up to parent component
  }

  return (
    <Card className='NewExpense'>
        <ExpenseForm onSaveExpenseData={handleSaveExpenseData}/>
    </Card>
  )
}

export default NewExpense