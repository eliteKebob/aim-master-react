import { ICustomizeTargets } from "../types/component.types";

const CustomizeTargets = ({
  targetSize,
  theme,
  targets,
  setTargetSize,
  setTargets,
}: ICustomizeTargets) => {
  const handleTarget = (el: HTMLInputElement, isSize: boolean) => {
    let val = parseInt(el.value);
    const min = parseInt(el.min);
    const max = parseInt(el.max);
    val = Math.min(Math.max(val, min), max);
    isSize ? setTargetSize(val) : setTargets(val);
  };

  return (
    <>
      <div className="set-size flex-center-center">
        <p>Set How Big Target is (1-20)</p>
        <input
          type="number"
          value={targetSize}
          onChange={(e) => handleTarget(e.target, true)}
          max="20"
          min="1"
          style={{ backgroundColor: theme }}
        />
        <div
          className="st-example"
          style={{
            width: `${targetSize === 1 ? 0.5 : targetSize - 1}vh`,
            height: `${targetSize === 1 ? 0.5 : targetSize - 1}vh`,
            backgroundColor: theme,
          }}
        ></div>
      </div>
      <div className="set-target-amount flex-center-center">
        <p>Set How Many Targets on Screen (1-30)</p>
        <input
          type="number"
          value={targets}
          onChange={(e) => handleTarget(e.target, false)}
          max="30"
          min="1"
          style={{ backgroundColor: theme }}
        />
      </div>
    </>
  );
};

export default CustomizeTargets;
