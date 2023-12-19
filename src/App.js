import React, { useState } from 'react';
import NameBox from './ButtonOne';
import EmailBox from './ButtonTwo';
import './Style.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleReset = () => {
    setName('');
    setEmail('');
    setText('');
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Text:', text);
  };

  return (
    <div>
      <NameBox
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <EmailBox
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="container">
        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="container">
        <button  onClick={handleReset} >Clear</button>
        <button  onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default App;
