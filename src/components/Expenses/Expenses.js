import ExpenseItems from './ExpenseItems';
import Card from './../UI/Card';

const Expenses = (props) => {
  return (
    <Card className="Expenses">
        { props.items.map((expense)=>(
            <ExpenseItems
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )) }
    </Card>
  )
}

export default Expenses