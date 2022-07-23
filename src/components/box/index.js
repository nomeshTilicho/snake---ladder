import React, { Fragment } from "react";
import { snakePositions, ladderPositions } from "../../data/snl-positions";
import { useGlbalState } from "../../store/context";
import "./style.css";

function checkIfSnakeOrLadderPresent(boxIndex, snackPosArr, ladPosArr) {
  let value = "";
  snackPosArr.forEach((snake) => {
    if (snake.currentPosition === boxIndex) {
      value = <div className="snake">S</div>;
    }
  });
  ladPosArr.forEach((ladder) => {
    if (ladder.currentPosition === boxIndex) {
      value = <div className="ladder">L</div>;
    }
  });
  return value;
}

function checkIsPlayerPresent(currentPosition, playerPosition, playerCount) {
  let value = null;
  if (currentPosition === playerPosition?.currentPosition) {
    value = <div className={`player-${playerCount}`} key={playerCount}></div>;
  }
  return value;
}

function Box({ boxIndex }) {
  const state = useGlbalState();
  return (
    <Fragment>
      <div className="box">
        <div className="box-index">{boxIndex}</div>
        {checkIfSnakeOrLadderPresent(boxIndex, snakePositions, ladderPositions)}
        {checkIsPlayerPresent(boxIndex)}
        {Object.keys(state.players).map((player, i) =>
          checkIsPlayerPresent(boxIndex, state.players[player], i + 1)
        )}
      </div>
    </Fragment>
  );
}

export default Box;
