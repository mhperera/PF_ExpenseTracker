import React from 'react';
import ExpenseDate from './ExpenseDate';

const ExpenseItems = (props) => {
	return (
		<div className="ExpenseItems">
      <ExpenseDate
        date={props.date}
      />
			<div className='ExpenseItems__description'>
        <h2 className='ExpenseItems__title'>{ props.title }</h2>
        <div className='ExpenseItems__price'>LKR : { props.amount }</div>
      </div>
		</div>
	);
};

export default ExpenseItems;
