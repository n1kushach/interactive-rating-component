import "./App.css";
import StarIcon from "./images/icon-star.svg";
import Illustration from "./images/illustration-thank-you.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([
    {
      id: 1,
      value: 1,
      clicked: false,
    },
    {
      id: 2,
      value: 2,
      clicked: false,
    },
    {
      id: 3,
      value: 3,
      clicked: false,
    },
    {
      id: 4,
      value: 4,
      clicked: false,
    },
    {
      id: 5,
      value: 5,
      clicked: false,
    },
  ]);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(0);

  const handleClick = (e) => {
    let id = Number(e.target.innerText);
    setNumbers((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id == id) {
          return { ...obj, clicked: true };
        } else {
          return { ...obj, clicked: false };
        }
        return obj;
      });
      return newState;
    });
  };

  const handleSubmit = () => {
    let clicked = numbers.filter((number) => number.clicked);
    let value = clicked[0].value;
    if (clicked.length > 0) {
      setActive(true);
      setValue(value);
    }
  };

  return (
    <div className="App">
      <div className={active === true ? "resultbox" : "hidden"}>
        <img src={Illustration}></img>
        <span>You selected {value} out of 5!</span>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
      <div className={active === true ? "hidden" : "box"}>
        <img src={StarIcon}></img>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="numbers">
          {numbers.map((number, index) => {
            return (
              <button
                style={{
                  backgroundColor: number.clicked ? "#FC7614" : "#262E38",
                  color: number.clicked ? "#FFFFFF" : "#7C8798",
                }}
                onClick={(e) => handleClick(e)}
                key={index}
                className="ratingnumber"
              >
                {number.value}
              </button>
            );
          })}
        </div>
        <button onClick={() => handleSubmit()} className="box-btn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
