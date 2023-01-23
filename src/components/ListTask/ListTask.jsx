import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "../Task/Task";
import { Button } from "react-bootstrap";
import "./List.css";
import { toogledone } from "../../redux/actions/action";

const ListTask = () => {
  const todoList = useSelector((state) => state.TodoReducer.listTodo);
  const [list, setList] = useState([]);
  const [done, setDone] = useState(false);
  const [notDone, setnotDone] = useState(false);
  // console.log("done", done, "notdone", notDone);
  const handleDone = () => {
    setDone(true);
    setnotDone(false);
  };
  const handleNotdone = () => {
    setDone(false);
    setnotDone(true);
  };
  const dispatch = useDispatch();
  const handleReset = () => {
    // setList(todoList)
    setDone(false);
    setnotDone(false);
    dispatch(toogledone());
  };
  //another method 
  // const handleList = () => {
  //   setList(
  //     list.filter((task) => {
  //       if (done === true) {
  //         return task.isDone === true;
  //       } else if (notDone === true) {
  //         return task.isDone === false;
  //       } else {
  //         return task;
  //       }
  //     })
  //   );
  // };

  const handleList = () => {
    if (done === true) {
      setList(list.filter((task) => task.isDone === true));
    } else if (notDone === true) {
      setList(list.filter((task) => task.isDone === false));
    }
  
  };
  console.log(list);
  useEffect(() => {
    setList(todoList);
    handleList();
  }, [todoList, done, notDone]);
  return (
    <div className="list">
      <div className="filtredbtn">
        <Button variant="info" onClick={handleDone}>
          Filter By Done
        </Button>
        <Button variant="info" onClick={handleNotdone}>
          {" "}
          Filter by Undo
        </Button>
        <Button variant="info" onClick={handleReset}>
          Reset
        </Button>

        {list.map((taskDetails, key) => (
          <Task taskDetails={taskDetails} key={key} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
