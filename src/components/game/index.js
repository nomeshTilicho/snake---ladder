import React, { useEffect, useState } from "react";
import { useDispatchGlobalState, useGlbalState } from "../../store/context";
import Layout from "../layout";
import "./style.css";

function Game() {
  const state = useGlbalState();
  const dispatch = useDispatchGlobalState();

  return (
    <div className="game">
      <div className="player-container">
        <span>Player One</span>
        <div className={`player-1`}></div>
      </div>

      <div className="player-container">
        <span>Player Two</span>
        <div className={`player-2`}></div>
      </div>
      {state.showLayout && <Layout />}
    </div>
  );
}

export default Game;
