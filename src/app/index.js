import { Fragment, useEffect } from "react";
import Game from "../components/game";
import { gameover, initgame, movedice, resetgame } from "../store/actions";
import { useDispatchGlobalState, useGlbalState } from "../store/context";
import "./style.css";

function App() {
  const state = useGlbalState();
  const dispatch = useDispatchGlobalState();

  useEffect(() => {
    const winning_player = Object.entries(state.players).find(
      ([player, { currentPosition }]) => currentPosition >= 100 && player
    );

    if (Array.isArray(winning_player)) {
      const player = winning_player[0];
      dispatch(gameover(player));
    }
  }, [state.currentDiceNumber]);

  if (state.isGameOver) {
    return (
      <div className="game-over-container">
        <h5>Game Over</h5>
        <p>Winner is {state.gameWinner}</p>
        <button onClick={() => dispatch(resetgame())}>Reset Game</button>
      </div>
    );
  }

  return (
    <div className="app-container">
      {!state.isGame ? (
        <button className="start" onClick={() => dispatch(initgame())}>
          Start Game
        </button>
      ) : (
        <Fragment>
          <div className="score-container">
            <div className="dice-container">
              <button className="dice" onClick={() => dispatch(movedice())}>
                Roll Dice
              </button>
              <button
                className="dice"
                onClick={() => dispatch(movedice("even"))}
              >
                Crooked Dice
              </button>
              <span>Dice Number: {state.currentDiceNumber}</span>
            </div>
            <p>Chance To Roll Dice: {state.chanceToRollDice}</p>
            <p>Player One Position: {state.players.P1.currentPosition}</p>
            <p>Player Two Position: {state.players.P2.currentPosition}</p>
          </div>
          <Game />
        </Fragment>
      )}
    </div>
  );
}

export default App;
