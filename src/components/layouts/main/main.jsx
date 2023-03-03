import React, { useEffect, useState } from "react";

export const Main = () => {
  const [count, setCount] = useState(0);

  const [style, setStyle]=useState('titulo')

  useEffect(() => {
    if (count >= 10) {
        setStyle('amarillo')
    }else{
        setStyle('titulo')
    }
  }, [count]);

  function ADD() {
    setCount(count + 1);
  }

  function RESET() {
    setCount(0);
  }

  function Substract() {
    setCount(count - 1);
  }

  return (
    <div className="caja">
      <h2 className
      ={style}>{count}</h2>

      <div className="buttons">
        <button onClick={ADD}>ADD</button>
        <button onClick={RESET}>RESET</button>
        <button onClick={Substract}>Subtract</button>
      </div>
    </div>

    // <div>
    //     <h2>{count}</h2>

    //     <div className='buttons'>
    //     <button onClick={()=>{setCount(count+1)}}>ADD</button>
    //     <button onClick={()=>{setCount(0)}}>RESET</button>
    //     <button onClick={()=>{setCount(count-1)}}>Subtract</button>
    //     </div>

    // </div>
  );
};
