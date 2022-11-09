import React from "react";
import Square from "./Square";
import square from "./Square";

const Board = () => {
  return (
    <div>
      <div>
        <Square value={0}>
          <p>Hello Props Children</p>
        </Square>
        <Square value={1} />
        <Square value={2} />
      </div>
      <div>
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
      <div>
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
    </div>
  );
};

export default Board;
