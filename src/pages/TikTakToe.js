import { useState } from "react";
import Grid from "../components/Grid/Grid";
import Button from "../components/Button/Button";

const TikTakToe = () => {
  const NOUGHT = "O";
  const CROSS = "X";
  const PLAYER_ONE = "Player-1";
  const PLAYER_TWO = "Player-2";
  //let CELLS = ['', '', '', '', '', '', '', '', ''];
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [hideParagraph, setHideParagraph] = useState(false);
  const [playerOneAnswers, setPlayerOneAnswers] = useState([]);
  const [playerTwoAnswers, setPlayerTwoAnswers] = useState([]);
  const [CELLS, setCELLS] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState({
    startingPlayer: PLAYER_ONE,
    chosenLetter: "",
  });

  const initializePlayer = (currenPlayer) => {
    setPlayer((prevPlayer) => {
      return {
        ...prevPlayer,
        startingPlayer: currenPlayer,
        chosenLetter: CROSS,
      };
    });
    setHideParagraph(true);
  };

  const getPlayersAnswers = (startingPlayer, PLAYER_ONE, index) => {
    if (startingPlayer === PLAYER_ONE) {
      setPlayerOneAnswers([...playerOneAnswers, index]);
    }

    return setPlayerTwoAnswers([...playerTwoAnswers, index]);
  };

  const retrievePlayersAnswers = (index) => {
    const { startingPlayer, chosenLetter } = player;
    let playersTurn = chosenLetter === CROSS ? PLAYER_TWO : PLAYER_ONE;
    let crossOrNought = chosenLetter === CROSS ? NOUGHT : CROSS;

    setPlayer((prevPlayer) => {
      return {
        ...prevPlayer,
        startingPlayer: playersTurn,
        chosenLetter: crossOrNought,
      };
    });

    CELLS[index] = chosenLetter;

    getPlayersAnswers(startingPlayer, PLAYER_ONE, index);

    let playersAnswers = startingPlayer === PLAYER_ONE ? playerOneAnswers : playerTwoAnswers;

    searchForWinner(WINNING_COMBINATIONS, playersAnswers)
  };

  const searchForWinner = (winning_combos, playersAnswers) => {
    const totalNumberOfAnswers = playerOneAnswers.length + playerTwoAnswers.length;

    let winner = winning_combos.find((a) =>
      a.every((v, i) => v === playersAnswers[i])
    );

    if(totalNumberOfAnswers === 9) {
      alert('There was a draw')
    }

    if (winner) {
      alert(`${player.startingPlayer === PLAYER_ONE ? "Player One Won" : "Player Two Won"}`);
    } 
  };


  return (
    <div>
      <h1>Tik Tak Toe</h1>
      <Grid
        chosenLetter={player.chosenLetter}
        retrievePlayersAnswers={retrievePlayersAnswers}
        cells={CELLS}
      />

      <div className="instructions-container">
        {!hideParagraph ? (
          <>
            <p>
              Click the buttons to initialize a game where the first player will
              have an "X" and the second player an "O"{" "}
            </p>
            <Button setCurrentPlayer={() => initializePlayer(PLAYER_ONE)}>
              Player 1's turn
            </Button>
            <Button setCurrentPlayer={() => initializePlayer(PLAYER_TWO)}>
              Player 2's turn
            </Button>
          </>
        ) : (
          <p>Please Start!</p>
        )}
      </div>
    </div>
  );
};

export default TikTakToe;
