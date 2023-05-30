import React, {useState} from 'react';
import ExpenseItems from './ExpenseItems';
import Card from './../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const handleYearChange = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="Expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onFilterYear={handleYearChange}
      />
      <div>
          { props.items.map((expense)=>(
              <ExpenseItems
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
              />
          )) }
      </div>
    </Card>
  )
}

export default Expenses