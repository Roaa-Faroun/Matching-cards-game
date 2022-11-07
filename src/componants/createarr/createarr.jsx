import { useEffect, useState } from "react";
const CreateImageArray = (props) => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    checkWin();
  }, [game]);
  const chickandFlip = (i, e) => {
    setGame([...game, { index: i, pic: e }]);
    document.querySelectorAll(".box")[i].style = `transform: rotateY(-180deg);`;
  };
  const checkWin = () => {
    if (game.length === 2 && game[0].pic === game[1].pic) {
      props.setRight((right) => right + 1);
      props.setAttempts((attempts) => attempts + 1);
      document.querySelectorAll(".box")[game[0].index].classList.add("right");
      document.querySelectorAll(".box")[game[1].index].classList.add("right");
      setGame([]);
    } else if (game.length === 2 && game[0].pic !== game[1].pic) {
      props.setAttempts((attempts) => attempts + 1);
      setGame([]);
      setTimeout(() => {
        document.querySelectorAll(".box").forEach((e) => {
          if (!e.classList.contains("right")) {
            e.style = `transform: none`;
          }
        });
      }, 1000);
    }
  };
  return (
    <>
      {props.ImageArr.map((e, i) => {
        return (
          <div className={`box`} key={i}>
            <div className="face front" onClick={() => chickandFlip(i, e)}>
              {i + 1}
            </div>
            <div className="face back">
              <img src={e} className="image" alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CreateImageArray;
