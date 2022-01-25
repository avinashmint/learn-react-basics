import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expense from "./components/Expenses/Expense";


const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Amul Butter 500gm",
    date: new Date(2021, 1, 1),
    amount: 235,
  },
  {
    id: 2,
    title: "Grofers Desi Ghee 1kg",
    date: new Date(2022, 2, 11),
    amount: 392,
  },
  {
    id: 3,
    title: "HMB Brown Bread",
    date: new Date(2022, 2, 15),
    amount: 40,
  },
  {
    id: 4,
    title: "Patanjali Doodh Biscuit",
    date: new Date(2022, 1, 21),
    amount: 10,
  },
  {
    id: 5,
    title: "Amul Butter 100gm",
    date: new Date(2022, 3, 1),
    amount: 49,
  },
];
const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
