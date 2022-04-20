import React, { useState, useEffect } from "react";
import Complete from "./Complete";
import Edit from "./Edit";
import { confirmAlert } from "react-confirm-alert";
import { Modal, Button } from "react-bootstrap";

const Panding = ({ list, setlist }) => {
  const [complete, setcomplete] = useState([]);
  const [edit, setedit] = useState([]);
  const [show, setShow] = useState(false);

  // for dialogue box
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    handleClose();
  }, []);

  ////Move Task panding to Edit Task////
  const editTask = (item) => {
    setedit(item);
  };
  ////Move Task panding to Compelete Task////
  const handleCheckbox = (e) => {
    const value = e.target.value;
    list.filter((item) => {
      if (item.id === value) {
        setcomplete((complete) => {
          return [...complete, item];
        });
      }
    });
    let result = list.filter((item) => {
      e.preventDefault();
      return item.id !== value;
    });
    setlist(result);
  };

  // function for delte in Panding Task///////
  const deleteTask = (item) => {
    var result = list.filter((i) => {
      return i.id !== item.id;
    });
    setlist(result);
  };

  return (
    <>
      <div>
        <h2>Pending Task</h2>

        {list.map((item) => {
          const { id, task } = item;

          return (
            <div key={id}>
              <div>
                <input type="checkbox" value={id} onChange={handleCheckbox} />
                {task}
              </div>
              <span>
                <Button
                  data-toggle="modal"
                  variant="info"
                  onClick={() => {
                    handleShow();
                    editTask(item);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    deleteTask(item);
                  }}
                >
                  Delete
                </Button>
              </span>
            </div>
          );
        })}
      </div>

      <Complete
        complete={complete}
        setcomplete={setcomplete}
        list={list}
        setlist={setlist}
      />

      <Modal show={show} onHide={handleClose}>
        <h2>Edit Task</h2>
        <Modal.Body>
          <Edit
            list={list}
            setlist={setlist}
            edit={edit}
            setedit={setedit}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Panding;
