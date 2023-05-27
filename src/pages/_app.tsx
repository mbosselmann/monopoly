import type { AppProps } from "next/app";
import { useState } from "react";
import { fields } from "../db";
import { examplePlayers } from "../db";
import { avatars } from "@/db";
import { colors } from "@/db";

export default function App({ Component, pageProps }: AppProps) {
  const [players, setPlayers] = useState(examplePlayers);
  const [currentFieldMessage, setCurrentFieldMessage] = useState(
    findMessage(0) ?? ""
  );
  const [currentPlayer, setCurrentPlayer] = useState(players[0].id);

  function findMessage(fieldNumber: number) {
    return fields
      ?.flatMap((field) => field)
      ?.find((field) => field.fieldNumber === fieldNumber)?.message;
  }

  function updatePlayerLocation(diceNumber: number) {
    const updatedPlayers = players.map((player) =>
      player.id === currentPlayer
        ? {
            ...player,
            playerLocation: (player.playerLocation + diceNumber) % 16,
          }
        : player
    );
    const indexOfCurrentPlayer = updatedPlayers.findIndex(
      (player) => player.id === currentPlayer
    );
    setPlayers(updatedPlayers);
    setCurrentFieldMessage(
      findMessage(updatedPlayers[indexOfCurrentPlayer].playerLocation) ?? ""
    );
  }

  function setNextPlayer() {
    const findNextPlayer = players.findIndex(
      (player) => player.id === currentPlayer
    );
    setCurrentPlayer(players[findNextPlayer + 1]?.id ?? players[0].id);
  }

  return (
    <Component
      {...pageProps}
      avatars={avatars}
      colors={colors}
      players={players}
      fields={fields}
      updatePlayerLocation={updatePlayerLocation}
      currentFieldMessage={currentFieldMessage}
      currentPlayer={currentPlayer}
      setNextPlayer={setNextPlayer}
    />
  );
}
