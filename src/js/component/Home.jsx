import React, { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [arrayCount, setArrayCount] = useState([]);

  useEffect(() => {
    const updateCount = () => {
      setCount((count) => count + 1);

      const countToArr = count.toString().padStart(6, "0").split("");
      setArrayCount(countToArr);
    };

    const timeout = setTimeout(updateCount, 1000);
    return () => clearTimeout(timeout);
  }, [count]);

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
    </div>
  );
};

export default Home;

// import React from "react";
// import One from "./One.jsx";
// import Tens from "./Tens.jsx";
// import Hundreds from "./Hundreds.jsx";
// import Thousand from "./Thousand.jsx";
// import TenThousand from "./TenThousand.jsx";
// import HundredThousand from "./HundredThousand.jsx";

// //create your first component
// function  Home () {

// 	return (
// 	<div className="clock container-fluid">
// 		 <img src="https://cdn-icons-png.flaticon.com/512/2928/2928750.png"  alt="" />
// 		 <HundredThousand />
// 		 <TenThousand />
// 		 <Thousand />
// 		 <Hundreds />
// 		 <Tens />
// 		 <One />
// 	</div>
// 	);
// };
// export default Home;
