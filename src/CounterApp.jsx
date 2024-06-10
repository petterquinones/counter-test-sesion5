import {useState} from 'react';
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

    const [counter, setCounter ] = useState(value);

  const handleAdd=() =>{
   /* setCounter(counter + 1); */
   setCounter((c)=> c + 1);
  }

  const handleSubstract=() =>{
    /* setCounter(counter + 1); */
    setCounter((c)=> c - 1);
   }

   const handleReset=() =>{
    /* setCounter(counter + 1); */
    setCounter(value);
   }

  return (
    <>
      <h1>CounterApp</h1>
      <p>{counter}</p>

      <button onClick={handleAdd}> + 1</button>
      <button onClick={handleReset}> Reset</button>
      <button onClick={handleSubstract}> - 1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
