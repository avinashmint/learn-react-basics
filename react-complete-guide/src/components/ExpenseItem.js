import './ExpenseItem.css';

function ExpenseItem() {

    const expenseDate = new Date(2022, 1, 22);
    const expenseTitle = 'Amul Butter 500gm';
    const expenseAmount = 235;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
      <h2>{expenseTitle}</h2>
      <div className="expense-item__price">INR {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
