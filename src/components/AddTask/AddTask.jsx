import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/action";
import "./AddTask.css";

const AddTask = () => {
  // 1/ on va faire une state pour recuperer la variable de l'input et set the attribut value dans l'input

  // 2/ preparer les event handler la premiere pour prendre la valeur de l'input et la deuxieme
  //pour le submit et l'add dans la liste

  //3/ on va preparer le dispatch d'action dans "action-types.js" apres dans "action.js" et la bas
  // on va prendre attention qu'on va utiliser le payload comme params

  //4/in the component on va dispatchi l'action and use it in the handlesubmit
  const [newTask, setnewTask] = useState("");
  const handleJoin = (e) => {
    setnewTask(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (newTask === "") {
      alert("you cannot add a new task");
    } else {
      dispatch(addTask(newTask));
      setnewTask("");
    }
  };
  return (
    <div>
      <input
        className="inputAdd"
        type="text"
        placeholder=" Add new Task . . ."
        value={newTask}
        onChange={handleJoin}
      />
      <Button variant="warning" onClick={handleSubmit}>
        Add Task
      </Button>
    </div>
  );
};

export default AddTask;
