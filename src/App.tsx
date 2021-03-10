import React from 'react';
import { Counter } from './Counter';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField
        user={{ lastName: 'user2', name: 'user1' }}
        handleChange={(e) => {
          console.log(e.target);
        }}
      />
      <Counter>{({ count, setCount }) => <div>{count}</div>}</Counter>
    </div>
  );
};

export default App;
