import "./App.css";
import { useEffect, useState } from "react";
import CreateImageArray from "./componants/createarr/createarr";
import CreateImage from "./componants/imagecards/changeimages.componant";

import image1 from "./assets/boku.png";
import image2 from "./assets/dora.png";
import image3 from "./assets/killua.png";
import image4 from "./assets/SpongeBob.png";
import image5 from "./assets/squidward.png";
import image6 from "./assets/tom.png";
function App() {
  const imageGroup = [
    image4,
    image1,
    image5,
    image2,
    image3,
    image6,
    image4,
    image1,
    image3,
    image5,
    image2,
    image6,
  ];
  const [ImageArr, setImageArr] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const getRandInd = (arr) => {
    let index = Math.floor(Math.random() * 12);
    if (arr[index] !== "null") {
      return arr.indexOf("null");
    }
    return index;
  };
  const createArr = () => {
    let arr = [
      "null",
      "null",
      "null",
      "null",
      "null",
      "null",
      "null",
      "null",
      "null",
      "null",
      "null",
      "null",
    ];
    for (let i = 0; i < 12; i++) {
      let ind = getRandInd(arr);
      arr[ind] = imageGroup[i];
    }
    setImageArr(arr);
  };
  useEffect(() => {
    createArr();
  }, []);
  useEffect(() => {}, [ImageArr]);
  const [attempts, setAttempts] = useState(0);
  const [right, setRight] = useState(0);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    setAttempts(0);
    setRight(0);
    setImageArr([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);

    document.querySelectorAll(".box").forEach((e) => {
      e.classList.remove("right");
      e.style = `transform: none`;
    });
    setReset(false);
    setTimeout(() => {
      createArr();
    }, 1000);
  }, [reset]);
  return (
    <div className="App">
      <div className="score">
        <span>Right: {right} </span>
        <span>Attempts: {attempts}</span>
      </div>
      <div className="cont">
        <CreateImage
          ImageArr={ImageArr}
          attempts={attempts}
          reset={reset}
          setReset={setReset}
          right={right}
          createArr={createArr}
          setAttempts={setAttempts}
          setRight={setRight}
        />
        ;
      </div>
    </div>
  );
}

export default App;
