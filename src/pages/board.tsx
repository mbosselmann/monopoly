import { useState } from "react";
import Head from "next/head";
import type { Field } from "../types/Field";
import Board from "../components/Board";
import Link from "next/link";
import { Avatar } from "@/types/Avatar";

interface BaordProps {
  players: Avatar[];
  fields: Field[][];
  updatePlayerLocation: (diceNumber: number) => void;
  currentFieldMessage: string;
  currentPlayer: string;
  setNextPlayer: () => void;
}

export default function BoardPage({
  players,
  fields,
  updatePlayerLocation,
  currentFieldMessage,
  currentPlayer,
  setNextPlayer,
}: BaordProps) {
  const [number, setNumber] = useState(0);
  const [hasRolled, setHasRolled] = useState(false);

  function rollDice() {
    const newNumber = Math.floor(Math.random() * 3 + 1);
    setNumber(newNumber);
    updatePlayerLocation(newNumber);
    setHasRolled(true);
  }

  function handleNextPlayer() {
    setNextPlayer();
    setHasRolled(false);
    setNumber(0);
  }
  console.log(players);

  return (
    <>
      <Head>
        <title>Monopoly (on Fire)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {currentPlayer && (
        <>
          <h2>Current player:</h2>
          <p>{players?.find((player) => player?.id === currentPlayer)?.name}</p>
          <p>
            Dice:
            {number === 0 ? "You need to roll the dice first." : number}
          </p>

          {hasRolled ? (
            <button type="button" onClick={handleNextPlayer}>
              I am done. Next player!
            </button>
          ) : (
            <button type="button" onClick={rollDice}>
              Roll the Dice!
            </button>
          )}
          <Link href="/">Back to start</Link>
        </>
      )}
      <Board
        fields={fields}
        players={players}
        currentFieldMessage={currentFieldMessage}
      />
    </>
  );
}
