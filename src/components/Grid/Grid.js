import Cell from "../Cell/Cell";

import "./Grid.css";

const Grid = ({ cells, retrievePlayersAnswers }) => {
  
  return (
    <div className="grid">
      {cells.map((cell, index) => { 
        return (
          <Cell
            index={index}
            chosenLetter={cell}
            retrievePlayersAnswers={retrievePlayersAnswers}
          />
        );
      })}
    </div>
  );
};

export default Grid;
