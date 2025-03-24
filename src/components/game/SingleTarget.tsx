import { useEffect, useRef, useState } from "react";
import { ISingleTarget } from "../../types/component.types";
import { calculateTopRight } from "../../utils/formulas";

const SingleTarget = ({
  targetSize,
  gameRunning,
  theme,
  gameOver,
  clickToHit,
  position,
  aimed,
  setScore,
}: ISingleTarget) => {
  const target = useRef<HTMLDivElement | null>(null);
  const [overlapping, setOverlapping] = useState<boolean>(false);

  // const handleTargetHit = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const hit = () => {
  //     if (gameRunning && !gameOver) {
  //       stylist();
  //       setScore(score + 1);
  //     }
  //   };
  //   switch (e.type) {
  //     case "click":
  //       clickToHit && hit();
  //       break;
  //     case "mouseover":
  //       !clickToHit && hit();
  //       break;
  //   }
  // };

  const stylist = () => {
    if (target?.current) {
      const { top, right } = calculateTopRight();
      target.current.style.top = `${top}%`;
      target.current.style.right = `${right}%`;
    }
  };

  useEffect(() => {
    if (gameRunning && !gameOver) {
      stylist();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (target?.current) {
      if (!clickToHit) {
        const rect = target?.current.getBoundingClientRect();
        if (
          position.x >= rect.left &&
          position.x <= rect.right &&
          position.y >= rect.top &&
          position.y <= rect.bottom
        ) {
          if (gameRunning && !gameOver && !overlapping) {
            setOverlapping(true);
            stylist();
            setScore((prev) => prev + 1);
          }
          setOverlapping(false);
        }
      }
    }
    // eslint-disable-next-line
  }, [position]);

  useEffect(() => {
    if (clickToHit && target?.current) {
      const rect = target?.current.getBoundingClientRect();
      if (
        aimed.x >= rect.left &&
        aimed.x <= rect.right &&
        aimed.y >= rect.top &&
        aimed.y <= rect.bottom
      ) {
        if (gameRunning && !gameOver) {
          stylist();
          setScore((prev) => prev + 1);
        }
      }
    }
    // eslint-disable-next-line
  }, [aimed]);

  return (
    <div
      className="single-target"
      ref={target}
      // onMouseOver={(e) => handleTargetHit(e)}
      // onClick={(e) => handleTargetHit(e)}
      style={{
        width: `${targetSize}vh`,
        height: `${targetSize}vh`,
        backgroundColor: theme,
      }}
    ></div>
  );
};
export default SingleTarget;
