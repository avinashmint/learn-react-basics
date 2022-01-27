import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const startEditingHandler = () => {
    setEditing(true);
  };

  const resetExpenseHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">      
      {!isEditing && <button type="button" onClick={startEditingHandler}>Add Expense</button> }
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={resetExpenseHandler} />}
    </div>
  );
};

export default NewExpense;
