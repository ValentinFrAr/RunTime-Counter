import React, { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [arrayCount, setArrayCount] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateCount = () => {
      if (!isPaused) {
        setCount((count) => count + 1);
      }

      const countToArr = count.toString().padStart(6, "0").split("");
      setArrayCount(countToArr);
    };

    const timeout = setTimeout(updateCount, 1000);
    return () => clearTimeout(timeout);
  }, [count, isPaused]);

  const handleStop = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="clock-content">
      <div className="title">
        <h1>Time Is Endless...</h1>
      </div>
      <div className="clock d-flex justify-content-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2928/2928750.png"
          alt="logo clock"
        />
        <div className="clock-num">{arrayCount[0]}</div>
        <div className="clock-num">{arrayCount[1]}</div>
        <div className="clock-num">{arrayCount[2]}</div>
        <div className="clock-num">{arrayCount[3]}</div>
        <div className="clock-num">{arrayCount[4]}</div>
        <div className="clock-num">{arrayCount[5]}</div>
      </div>
      <div className="btn-stop">
        <button className="stop-start" onClick={handleStop}>
          {isPaused ? "Resume" : "Stop"}
        </button>
      </div>
    </div>
  );
};

export default Home;
