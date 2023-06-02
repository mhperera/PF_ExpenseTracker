import React from 'react';
import ExpenseItems from './ExpenseItems';

const ExpensesList = (props) => {

    if(props.items.length === 0){
        return (<h2 className='ExpensesList__fallback'>No Expenses found for the year</h2>)
    }

    return (
        <ul className='ExpensesList'>
            {
                props.items.map((expense)=>(
                    <ExpenseItems
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    )
}

export default ExpensesList