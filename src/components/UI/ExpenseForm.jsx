import { useState } from "react";
import { Button } from "./Button";
import { FormInput } from "./FormInput";
import "./ExpenseForm.css"
export const ExpenseForm = ({ onShow, onNewExpenses }) => {
  const [title, setTitle] = useState("");
  console.log(title);

  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="new_expense__controls">
        <FormInput
          inputType="text"
          labelText="Заголовок"
          onChange={handleTitleChange}
          value={title}
        />
        <FormInput
          inputType="number"
          labelText="Количество"
          onChange={handleAmountChange}
          value={amount}
        />
        <FormInput
          inputType="date"
          labelText="Датировать"
          onChange={handleDateChange}
          value={date}
        />
      </div>

      <div className="button-container">
        <Button type={"button"} onClick={onShow}>
          Отмена
        </Button>
        <Button type={"submit"}>Добавить расходы</Button>
      </div>
    </form>
  );
};
