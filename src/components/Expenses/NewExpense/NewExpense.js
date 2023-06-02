import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../../UI/Card';

const NewExpense = (props) => {
	const [isNewExpense, setIsNewExpense] = useState(false);

	const handleSaveExpenseData = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
    setIsNewExpense(false);
		props.onSaveExpenseData(expenseData); // pass data up to parent component
	};

	const handleCancel = () => {
		setIsNewExpense(false);
	};

	return (
		<Card className="NewExpense">
			{!isNewExpense && <button onClick={()=>{setIsNewExpense(true);}}>New Expense</button>}
			{isNewExpense && (
				<ExpenseForm
					onSaveExpenseData={handleSaveExpenseData}
					onCancel={handleCancel}
				/>
			)}
		</Card>
	);
};

export default NewExpense;
