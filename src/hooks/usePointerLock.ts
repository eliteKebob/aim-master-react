import { useEffect, useRef, useState } from "react";
import { IPointerLock } from "../types/component.types";

const usePointerLock = ({ setGameRunning, start, gameOver }: IPointerLock) => {
  const game = useRef<HTMLDivElement>(null);

  const [isLocked, setIsLocked] = useState<boolean>(false);

  useEffect(() => {
    start();
    const handleLockChange = () => {
      setIsLocked(document.pointerLockElement === game?.current);
      setGameRunning(document.pointerLockElement === game?.current);
    };
    document.addEventListener("pointerlockchange", handleLockChange);
    return () => {
      document.removeEventListener("pointerlockchange", handleLockChange);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (gameOver) {
      setIsLocked(false);
    }
  }, [gameOver]);

  return [isLocked, game] as const;
};

export default usePointerLock;
