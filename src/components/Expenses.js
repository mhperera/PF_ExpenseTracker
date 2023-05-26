import React from 'react'
import ExpenseItems from './ExpenseItems';

const Expenses = (props) => {
  return (
    <div className="Expenses">
        { props.items.map((expense)=>(
            <ExpenseItems
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )) }
    </div>
  )
}

export default Expenses