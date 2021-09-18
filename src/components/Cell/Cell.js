import "./Cell.css";

const Cell = ({ index, retrievePlayersAnswers, chosenLetter }) => {
  return (
    <div className="cell" onClick={() => retrievePlayersAnswers(index)} key={index}>
      {chosenLetter}
    </div>
  );
};

export default Cell;
