import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import Card from './../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2023');

  const handleYearChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses =  props.items.filter((expense)=>(
    expense.date.getFullYear().toString() === filteredYear
  ));

  return (
    <Card className="Expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onFilterYear={handleYearChange}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}

export default Expenses