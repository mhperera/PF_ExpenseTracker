import React, { useState } from 'react';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const handleTitleChange = (e) => {
		setEnteredTitle(e.target.value);
	};

	const handleAmountChange = (e) => {
		setEnteredAmount(e.target.value);
	};

	const handleDateChange = (e) => {
		setEnteredDate(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		clearForm();
		props.onSaveExpenseData(expenseData); // pass data up to parent component
	};

	const clearForm = () => {
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={handleSubmit} className="ExpenseForm">
			<div className="ExpenseForm__controls">
				<div className="ExpenseForm__control">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						onChange={handleTitleChange}
						value={enteredTitle}
					/>
				</div>
				<div className="ExpenseForm__control">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						id="amount"
						min="0.01"
						step="0.01"
						onChange={handleAmountChange}
						value={enteredAmount}
					/>
				</div>
				<div className="ExpenseForm__control">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						id="date"
						min="2022-01-01"
						step="2023-12-31"
						onChange={handleDateChange}
						value={enteredDate}
					/>
				</div>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
