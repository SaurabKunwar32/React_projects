import React, { useState } from "react";
import TextField from "./Textfield";
import Select from "./Select";

export default function ExpenseForm({
  setExpenses,
  expense,
  setExpense,
  editingRowId,
  setEditingRowId,
}) {
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter title !!" },
      { minlength: 3, message: "Title should be at least 5 character long !!" },
    ],
    category: [{ required: true, message: "Please select  category !!" }],
    amount: [
      { required: true, message: "Please enter amount !!" },
      {
        pattern: /^-?(0|[1-9]\d*)$/,
        message: "Please enter a valid amount !!",
      },
    ],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.minlength && value.length < rule.minlength) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
        
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const formHandle = (e) => {
    e.preventDefault();

    const validResult = validate(expense);
    if (Object.values(validResult).length) return;

    if (editingRowId) {
      setExpenses((prevData) =>
        prevData.map((data) => {
          if (data.id === editingRowId) {
            return { ...expense, id: editingRowId };
          }
          return data;
        })
      );
      setEditingRowId("");
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      return;
    }

    setExpenses((prevData) => [
      ...prevData,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevData) => ({ ...prevData, [name]: value }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={formHandle}>
      <TextField
        label="Title"
        id="title"
        value={expense.title}
        onChange={handleChange}
        errors={errors.title}
        name="title"
      />

      <Select
        label="Category"
        id="category"
        value={expense.category}
        onChange={handleChange}
        errors={errors.category}
        name="category"
        options={["Education", "Medicine", "Bills", "Clothes", "Grocery"]}
        defaultOption=" Select Category"
      />

      <TextField
        label="Amount"
        id="amount"
        value={expense.amount}
        onChange={handleChange}
        errors={errors.amount}
        name="amount"
      />

      <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
    </form>
  );
}
