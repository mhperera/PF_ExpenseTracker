import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';

const App = () => {

  const expenseList = [
    {
      id:0,
      title: "Car Insurance",
      amount: 998.25,
      date: new Date(2023, 5, 1)
    },
    {
      id:1,
      title: "Health Insurance",
      amount: 500.15,
      date: new Date(2023, 5, 1)
    },
    {
      id:2,
      title: "Credit Card Installment",
      amount: 870.00,
      date: new Date(2023, 5, 1)
    },
    {
      id:3,
      title: "Groceries",
      amount: 658.22,
      date: new Date(2023, 5, 1)
    },
    {
      id:4,
      title: "Beauty Culture",
      amount: 18.05,
      date: new Date(2023, 5, 1)
    },
  ];

  const handleAddExpense = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    }
    console.log(expenseData);
  }

  return (
    <div className="App">
      <NewExpense onSaveExpenseData={handleAddExpense}/>
      <Expenses
        items={expenseList}
      />
    </div>
  );
}

export default App;
