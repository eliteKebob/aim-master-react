import { useEffect, useState } from "react";
import { SECONDS_PER_GAME, SECONDS_PER_MINUTE } from "../constants/date";
import { ISpm } from "../types/component.types";

const useSpm = ({ isChallenge, score, secs }: ISpm) => {
  const [spm, setSpm] = useState<number>(0);

  useEffect(() => {
    if (isChallenge) {
      setSpm(0);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isChallenge) {
      if (secs > 0) {
        const current = score / (SECONDS_PER_GAME + 1 - secs);
        setSpm(Math.floor(current * SECONDS_PER_MINUTE));
      } else {
        setSpm(0);
      }
    }
    // eslint-disable-next-line
  }, [score]);
  
  useEffect(() => {
    if (!isChallenge) {
      if (secs > 0) {
        setSpm(Math.floor((score / secs) * SECONDS_PER_MINUTE));
      } else {
        setSpm(0);
      }
    }
    // eslint-disable-next-line
  }, [secs]);

  return [spm, setSpm] as const;
};

export default useSpm;
