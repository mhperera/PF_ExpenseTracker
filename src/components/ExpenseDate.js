import React from 'react'

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day   = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year  = props.date.getFullYear();

  return (
    <div className='ExpenseDate'>
        <div className='ExpenseDate__month'>{ month }</div>
        <div className='ExpenseDate__day'>{ day }</div>
        <div className='ExpenseDate__year'>{ year }</div>
    </div>
  )
}

export default ExpenseDate