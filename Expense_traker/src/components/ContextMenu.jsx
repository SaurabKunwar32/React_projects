import React from "react";

export default function ContextMenu({
  menuposition,
  setMenuposition,
  rowId,
  setExpenses,
  setExpense,
  expenses,
  setEditingRowId
}) {
  if (!menuposition.left) return;  


  return (
    <div className="context-menu" style={menuposition}>
      <div
        onClick={(e) => {
          const { title, category, amount } = expenses.find(
            (expData) => expData.id === rowId
          );
          setExpense({ title, category, amount });
          setEditingRowId(rowId)
          setMenuposition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={(e) => {
          setExpenses((prevData) => prevData.filter((el) => el.id !== rowId));
          setMenuposition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
