import { useState } from 'react';

const MainContent = ({ title }) => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="card">
        <h2>{title}</h2>
        <p>Button clicked <strong>{count}</strong> times</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
    </main>
  );
};

export default MainContent;
