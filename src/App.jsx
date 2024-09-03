import { useRef, useState } from "react";
import "./App.css";

// ToDo-List -
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

// Timer -
export const Timer = () => {
  const timeInterval = useRef(null);
  const [time, setTime] = useState(0);

  const startTimer = (start, isPauseClicked) => {
    if (start && timeInterval) {
      timeInterval.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else if (isPauseClicked) {
      console.log("if");
      clearInterval(timeInterval.current);
      setTime(time);
    }
  };

  const reset = () => {
    clearInterval(timeInterval.current);
    setTime(0);
  };
  return (
    <div>
      <h1>Timer</h1>
      <h2>{time}</h2>
      <button
        onClick={() => {
          startTimer(true, false);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          startTimer(false, true);
        }}
      >
        Pause
      </button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

// Main App Function -
export default function App() {
  return (
    <main>
      <Timer />
      <TodoList />
    </main>
  );
}
