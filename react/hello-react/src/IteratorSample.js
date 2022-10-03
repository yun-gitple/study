import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'snowman'},
    { id: 2, text: 'ice'},
    { id: 3, text: 'snow'},
    { id: 4, text: 'wind'},
  ]);

  const [text, setText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setText('');
  }
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  const nameList = names.map(name => 
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>);

  return (
    <>
      <input value={text} onChange={onChange}/>
      <button onClick={onClick}>Add</button>
      <ul>{nameList}</ul>;
    </>
  )
}

export default IterationSample; 