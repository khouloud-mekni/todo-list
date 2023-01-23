import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edittask, toogledone, deletetask } from "../../redux/actions/action";
import "./Task.css";
const Task = ({ taskDetails }) => {
  // console.log(taskDetails)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const handleDone = () => {
    dispatch(toogledone(taskDetails.id));
  };
  const [edited, setEdited] = useState(taskDetails.description);
  // console.log(edited, "edited");
  const handleEdit = (e) => {
    setEdited(e.target.value);
  };
  const handleSave = () => {
    dispatch(edittask({ id: taskDetails.id, edited }));
    handleClose();
  };



  const handleDelete=()=>{
   dispatch(deletetask(taskDetails.id)) 
  }
  return (
    <div>
      <div className="taskPart">
        {taskDetails.isDone ? (
          <div>
            <h3>
              <s> {taskDetails.description}</s>
            </h3>
            <Button variant="outline-danger" onClick={handleDone}>
              {" "}
              Undo{" "}
            </Button>
          </div>
        ) : (
          <div>
            <h3>{taskDetails.description}</h3>
            <Button variant="outline-success" onClick={handleDone}>
              {" "}
              Done{" "}
            </Button>
          </div>
        )}
      </div>
      <Button variant="outline-dark" onClick={handleShow}>
        {" "}
        edit{" "}
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="inputedit"
            type="text"
            defaultValue={edited}
            onChange={handleEdit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Task;
