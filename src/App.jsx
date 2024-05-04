import { useState } from 'react';
import { Input } from 'antd';
import './App.css';

function App() {
  const [text, setText] = useState('');

  return (
    <>
      <h1>I-0 Detector</h1>
      <Input onChange={(e) => setText(e.target.value)} />
      <div className="textContainer">{text}</div>
      <p>
        Sometimes we get confuse about 0 (zero) and I (Capital i) . For example,
        if you have to type the OTP manually and if there is a Capital I or
        small L and Also if its Capital O or 0(Zero).To clear connfusion, Just
        simply copy the text in the field and output box will tell you if it's
        an (i) or (0).
      </p>
    </>
  );
}

export default App;
