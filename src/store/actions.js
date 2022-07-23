import {
  GAMEINIT,
  GAMEOVER,
  GAMERESET,
  MOVEDICE,
  RESETDICE,
} from "./actionTypes";

/** game */
export function initgame(data) {
  return {
    type: GAMEINIT,
    data,
  };
}

export function gameover(data) {
  return {
    type: GAMEOVER,
    data,
  };
}

export function resetgame() {
  return {
    type: GAMERESET,
  };
}

/** generate random number b/w 1-6 */
export function movedice(data) {
  return {
    type: MOVEDICE,
    data,
  };
}

/** reset dice to 0 */
export function resetdice() {
  return {
    type: RESETDICE,
  };
}
