import "./NewExpense.css"
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = ({ onNewExpenses }) => {
  // const [state, setState] = useState(false);

  // const showHandler = () => {
  //   setState(!state);
  // };

  return (
    <div className="wrapper">
      <ExpenseForm onNewExpenses={onNewExpenses} />
    </div>
  );
};
