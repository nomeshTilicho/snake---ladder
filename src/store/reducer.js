import { useReducer } from "react";
import { ladderPositions, snakePositions } from "../data/snl-positions";
import {
  GAMEINIT,
  GAMERESET,
  MOVEDICE,
  RESETDICE,
  GAMEOVER,
} from "./actionTypes";

const initialState = {
  isGame: false,
  showLayout: false,
  numOfPlayers: 0,
  chanceToRollDice: "",
  gameWinner: "",
  isGameOver: false,
  currentDiceNumber: 0,
  players: {
    P1: {
      currentPosition: 0,
    },
    P2: {
      currentPosition: 0,
    },
  },
};

const handleVerifyUpdate = (playerPos, diceNum) => {
  // in case of starting point
  if (playerPos === 0 && diceNum !== 6) {
    return playerPos;
  } else if (playerPos === 0 && diceNum === 6) {
    return 1;
  }

  // player is in game
  const playerLatestPos = playerPos + diceNum;
  const ladder = ladderPositions.find(
    (lad) => lad.currentPosition === playerLatestPos
  );
  const snake = snakePositions.find(
    (snk) => snk.currentPosition === playerLatestPos
  );

  // in case of ladder
  if (ladder) {
    alert("Congratulations! you get a ladder");
    return ladder.gotoPosition;
  } else if (snake) {
    // in case of snake
    alert("Snake bites you");
    return snake.gotoPosition;
  } else {
    // in case the block is empty
    return playerLatestPos;
  }
};

const handleVerifyNextChance = (diceNum, currentChance) => {
  if (diceNum === 6) {
    return currentChance;
  } else {
    return currentChance === "P1" ? "P2" : "P1";
  }
};

export function reducer(state, action) {
  switch (action.type) {
    // dice
    case MOVEDICE:
      const diceNum =
        action.data === "even"
          ? Math.ceil(Math.random() * 3) * 2
          : Math.ceil(Math.random() * 6);
      return {
        ...state,
        currentDiceNumber: diceNum,
        chanceToRollDice: handleVerifyNextChance(
          diceNum,
          state.chanceToRollDice
        ),
        players: {
          ...state.players,
          [state.chanceToRollDice]: {
            currentPosition: handleVerifyUpdate(
              state.players[state.chanceToRollDice].currentPosition,
              diceNum
            ),
          },
        },
      };
    case RESETDICE:
      return {
        ...state,
        currentDiceNumber: 0,
      };

    // game
    case GAMEINIT:
      let playersState = {};
      for (let i = 1; i <= state.numOfPlayers; i++) {
        playersState[`P${i}`] = {
          currentPosition: 0,
        };
      }
      return {
        ...state,
        isGame: true,
        showLayout: true,
        players: {
          P1: {
            currentPosition: 0,
          },
          P2: {
            currentPosition: 0,
          },
        },
        chanceToRollDice: "P1",
      };
    case GAMEOVER:
      return {
        ...state,
        gameWinner: action.data,
        isGameOver: true,
      };
    case GAMERESET:
      return initialState;
    default:
      return state;
  }
}

export default function useMyReducer() {
  return useReducer(reducer, initialState);
}
