import React from "react";
import { generateLayoutArray } from "../../helpers";
import Box from "../box";

function Layout() {
  return (
    <div className="game-container">
      {generateLayoutArray().map((_, i) => (
        <Box key={i} boxIndex={_} />
      ))}
    </div>
  );
}

export default Layout;
