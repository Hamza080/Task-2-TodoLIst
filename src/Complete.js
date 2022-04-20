import React, { useState } from "react";
import {  Button } from "react-bootstrap";
function Complete({ complete, setcomplete, list, setlist }) {

////// function for delte in CompleteTask
    const deleteTask = (item) => {
        var result = complete.filter((i) => {
          return i.id !== item.id;
        });
        setcomplete(result);
      };
    
  ////complete to move Panding ////
  const movePending = (item) => {
    setlist((list) => {
      return [...list, item];
    });
    var result = complete.filter((i) => {
      return i.id !== item.id;
    });
    setcomplete(result);
  };

  return (
    <>
      <div>
        <h2>Completed Task</h2>
        {complete.map((item, index) => {
          const { id, task } = item;
          return (
            <div key={index}>
             <div>{task} </div>
              <Button variant="primary"
               onClick={() => {movePending(item);}}>
                Move Pending Task
              </Button>
              <Button
                    variant="danger"
                    onClick={() => {deleteTask(item)}}>
                    Delete
                  </Button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Complete;
