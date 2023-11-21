import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = count;
    setText(data.slice(0, amount));
  };
  return (
    <section className='section-center'>
      <h4>Tired of boring Lorem-ipsum's</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraph</label>
        <input
          type='number'
          name='amount'
          id='amount'
          step={1}
          max={8}
          min={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn btn-success'>Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
