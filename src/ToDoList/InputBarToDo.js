import React, { useState } from "react";

let id = 0;

const InputBarToDo = ({ list, setList }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleClick = () => {
    setList([...list, { id: id, content: value }]);
    setValue("");
    id += 1;
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={handleClick}>Ajouter une tâche</button>
    </div>
  );
};

export default InputBarToDo;