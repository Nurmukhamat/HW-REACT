
import { NewExpense } from "./components/UI/NewExpense";
import { Login } from "./components/auth/Login";
import {Counter} from "./components/counter/Counter"
function App() {
  const getNewExpenses = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      {/* <NewExpense /> 
       <Counter /> */}
       {/* <Login /> */}
    </div>
  );
}

export default App;
