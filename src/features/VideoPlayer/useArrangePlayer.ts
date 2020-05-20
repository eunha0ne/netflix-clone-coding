import { useState, useEffect } from 'react';

export const useArrangePlayer = () => {
  const oldPlayer = document.getElementById('playerMountedPoint');
  const [player, setPlayer] = useState<HTMLElement | null>(oldPlayer);

  useEffect(() => {
    if (player) {
      const playerWrapper = player?.parentNode as HTMLElement;
      const newPlayer = document.createElement('div');

      newPlayer.id = 'playerMountedPoint';
      playerWrapper.classList.remove('is-enter');
      playerWrapper.removeChild(player);
      playerWrapper.appendChild(newPlayer);
    }
  }, [player, setPlayer]);
};
