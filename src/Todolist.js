import React,{ useState } from "react";
import Panding from "./Panding";

 function Todolist() {
    const [task, settask] = useState("");
    const [list, setlist] = useState([]);

    const handleSubmit = (e) => {
        console.log(new Date());
        if (task) {
          const record = { id: new Date().getTime().toString(), task: task };
          setlist((list) => {
            return [...list, record];
          });
          settask("");
        }
        e.preventDefault();
      };
  console.log(list);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>TodoList</h2>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={task}
                  onChange={(e) => settask(e.target.value)}
                  required
                />
              <button type="submit">Add</button>
            </form>
            <Panding  list={list} setlist={setlist}/>
        </>
      );
    }


    export default Todolist;