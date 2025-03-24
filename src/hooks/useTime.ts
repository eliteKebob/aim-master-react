import { useEffect, useState } from "react";
import {
  MILLISECONDS_PER_GAME,
  MILLISECONDS_PER_SECOND,
  SECONDS_PER_GAME,
} from "../constants/date";
import { IStoppage, ITime } from "../types/component.types";

const defaultStoppage: IStoppage = {
  start: 0,
  end: 0,
  total: 0,
};

const useTime = ({ gameOver, gameRunning, isChallenge, startTime }: ITime) => {
  const [now, setNow] = useState<number>(0);
  const [secs, setSecs] = useState<number>(SECONDS_PER_GAME);
  const [stoppage, setStoppage] = useState<IStoppage>(defaultStoppage);

  const clearMe = setInterval(() => {
    if (!gameOver) {
      setNow(Date.now());
      clearInterval(clearMe);
    }
  }, MILLISECONDS_PER_SECOND); // make this value as performance setting

  useEffect(() => {
    if (gameRunning && !gameOver) {
      if (isChallenge) {
        const threshold = startTime + stoppage.total + MILLISECONDS_PER_GAME;
        const distance = threshold - now;
        if (threshold !== distance) {
          const current = distance % MILLISECONDS_PER_GAME;
          setSecs(Math.floor(current / MILLISECONDS_PER_SECOND));
        }
      } else {
        const total = now - startTime - stoppage.total;
        setSecs(Math.floor(total / MILLISECONDS_PER_SECOND));
      }
      if (stoppage.start !== 0) {
        setStoppage((prev) => {
          const paused = {
            start: 0,
            end: 0,
            total: prev.total + (prev.end - prev.start),
          };
          return paused;
        });
      }
    } else {
      setStoppage((prev) => {
        const paused = {
          start: prev.start !== 0 ? prev.start : now,
          end: now,
          total: prev.total,
        };
        return paused;
      });
    }
    // eslint-disable-next-line
  }, [now]);

  useEffect(() => {
    if (gameOver) {
      setStoppage(defaultStoppage);
    }
  }, [gameOver]);

  return [now, secs, stoppage, setSecs] as const;
};

export default useTime;
