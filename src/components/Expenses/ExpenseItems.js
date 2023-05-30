import ExpenseDate from './ExpenseDate';
import Card from './../UI/Card';
import React, { useState } from 'react';

const ExpenseItems = (props) => {

  const [ title, setTitle ] = useState(props.title);

  const handleClick = () => {
    setTitle('Updated Title');
  }

	return (
		<Card className="ExpenseItems">
      <ExpenseDate
        date={props.date}
      />
			<div className='ExpenseItems__description'>
        <h2 className='ExpenseItems__title'>{ title }</h2>
        <div className='ExpenseItems__price'>LKR : { props.amount }</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
		</Card>
	);
};

export default ExpenseItems;
