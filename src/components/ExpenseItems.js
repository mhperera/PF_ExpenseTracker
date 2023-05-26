import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

const ExpenseItems = (props) => {
	return (
		<Card className="ExpenseItems">
      <ExpenseDate
        date={props.date}
      />
			<div className='ExpenseItems__description'>
        <h2 className='ExpenseItems__title'>{ props.title }</h2>
        <div className='ExpenseItems__price'>LKR : { props.amount }</div>
      </div>
		</Card>
	);
};

export default ExpenseItems;
