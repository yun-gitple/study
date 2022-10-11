import { Component, useState } from "react";
import { formatDiagnostic, SemanticClassificationFormat } from "typescript";

const EventPractice = () => {
  
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form, 
      [e.target.name]: e.target.value
    }

    console.log('nextForm:', nextForm);
    setForm(nextForm);
  }

  const onClick = () => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message: ''
    })
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
    // console.log('jongha event:%s, %s', e.target.name, e.target.value);
  }

  return (
    <div>
      <h1>Event Practice!</h1>
      <input
        type="text"
        name="username"
        placeholder="User Name"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="Input Anything"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Confirm</button>
    </div>
    )
}

export default EventPractice;