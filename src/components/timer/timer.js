import React from "react";
import { useState } from "react";
const Timer = () => {
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);

  return (
    <div>
      <input type="number" id="mins" />
      <label
        htmlFor="mins"
        value={min}
        onChange={(e) => {
          setMin(e.target.value);
        }}
      >
        Minutes
      </label>
      <input type="number" id="sencond" />
      <label
        htmlFor="sencond"
        value={second}
        onChange={(e) => {
          setSecond(e.target.value);
        }}
      >
        Second
      </label>
      <button className="btn btn-primary border">start</button>
      <button className="btn btn-primary border">pause / resume</button>
      <button className="btn btn-primary border">reset</button>
      <div>
        {min > 10 ? `${min} ` : `0${min}`} :
        {second > 10 ? `${second}` : `0${second}`}
      </div>
    </div>
  );
};
export default Timer;
