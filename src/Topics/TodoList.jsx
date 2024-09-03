import { useState } from "react";

export const TodoList = () => {
  const initItem = [
    { id: 0, name: "Item 1" },
    { id: 1, name: "Item 2" },
  ];
  const [item, setItem] = useState({ id: 0, name: "Item 1" });
  const [listItem, setListItem] = useState(initItem);
  const addItem = () => {
    setListItem((prev) => [...prev, item]);
  };

  const deleteItem = (index) => {
    setListItem(
      listItem.filter((item) => {
        return item.id !== index;
      }),
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          onChange={(e) => {
            setItem({ id: Date.now(), name: e.target.value });
          }}
        />
        <div>
          <button
            onClick={() => {
              if (!item) {
                return;
              }
              addItem(item);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      {listItem.map((item, index) => {
        return (
          <ul key={index}>
            <li key={index}>
              <span>{item.name}</span>
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
