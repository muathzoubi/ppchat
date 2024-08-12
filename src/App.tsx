import { useState, useEffect } from 'react';
import { db, ref, onValue, push } from './firebase';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const messagesRef = ref(db, 'messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messagesList = Object.values(data) as any;
        setMessages(messagesList);
      }
    });
  }, []);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (message.trim()) {
      const messagesRef = ref(db, 'messages');
      push(messagesRef, { text: message, user: user });
      setMessage('');
    }
  };

  return (
    <>
  { !ready || user ===''?  
    <>
      <input type='text' onChange={(e)=>{setUser(e.target.value)}} placeholder='User Name'/>
      <button onClick={()=>setReady(true)}>Submit</button>
      </>:
  null}
      {ready && user !=='' ?
    <div className="App">
      <div className="card">
            <ul>
          {messages.map((msg: any, index) => (
            <div className="chat-box">
              <li
                className={`notibody ${
                  msg.user === user ? ' right ' : ' left'
                }`}
                key={index}
              >
                <strong>{msg.user}</strong>
                <span>{msg.text}</span>
              </li>
          
            </div>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="continer-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit">✈️</button>
        </form>
      </div>
    </div>:null
    }
    </>
  );
}

export default App;
