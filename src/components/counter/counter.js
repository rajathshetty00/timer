import React, { useEffect, useRef, useState } from "react";
import "./counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [initBtn, setInitBtn] = useState(false);

  const interval = useRef();

  useEffect(() => {
    if (toggleBtn) {
      interval.current = setInterval(() => {
        setCount((count) => count + 1);
      }, [1000]);
    } else {
      clearInterval(interval.current);
    }
  }, [toggleBtn]);

  const onCountHandler = () => {
    setToggleBtn(!toggleBtn);
    setInitBtn(true);
  };

  const resetHandler = () => {
    setToggleBtn(false);
    clearInterval(interval.current);
    setCount(0);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <div className="btn-grp">
        <button onClick={onCountHandler}>
          {toggleBtn ? "Pause" : "Start"}
        </button>
        {initBtn && <button onClick={resetHandler}>Reset</button>}
      </div>
    </div>
  );
};

export default Counter;
