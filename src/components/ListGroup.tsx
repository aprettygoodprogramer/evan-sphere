import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function ListGroup() {
  let [items] = useState(["Evan", "Elise", "Beta", "LDSKJF:LKDSFJ"]);
  const EVAN = "EVAN EVAN EVAN";

  const [selectedIndex, setSelectedIndex]  = useState(-1);
 

  return (
    <>
      <h1>HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : 'list-group-item'}
            key={index}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
