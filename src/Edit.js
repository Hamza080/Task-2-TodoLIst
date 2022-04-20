import React from "react";
import { Form, Button } from "react-bootstrap";

const Edit = ({ list, setlist, edit, setedit,handleClose, }) => {
  const id = edit.id;
  const [name, setname] = React.useState(edit.task);
  const update = { id: id, task: name,  };
 

  const SubmitEdit = (e) => {
    let result = list.filter((item) => {
      return item.id !== id;
    });
    setlist(result);
    setlist((list) => {
      return [...list, update];
    });
    e.preventDefault();
  };
  return (
    <>
        <Form onSubmit={SubmitEdit}>
        <Form.Group >
          <input
            type="text"
            name="task"
            placeholder="Enter Task"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </Form.Group>
        <Button
          className="mt-3"
          variant="success"
          type="submit"
          onClick={handleClose}
        >
          Update Task
        </Button>
      </Form>
    </>
  );
};

export default Edit;
