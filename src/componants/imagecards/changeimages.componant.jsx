import { useState } from "react";
import CreateImageArray from "../createarr/createarr";
import "./changeimage.css";
const CreateImage = (props) => {
  return (
    <div className="container">
      <div className="cards-container">
        <CreateImageArray
          setAttempts={props.setAttempts}
          setRight={props.setRight}
          attempt={props.attempt}
          right={props.right}
          ImageArr={props.ImageArr}
        />
        {/* {console.log(props.reset)} */}
        {/* {console.log(props.right)} */}
        {props.right > 5 ? (
          <div className="done">
            <span>You Won 👏 </span>
            <button
              onClick={() => {
                props.setReset(true);
              }}
            >
              Restart
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default CreateImage;
