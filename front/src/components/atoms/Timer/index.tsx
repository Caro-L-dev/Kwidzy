/**
 * Package Import
 */
import React, { useEffect, useState } from "react";

/**
 * Types
 */
type SetStopFunction = React.Dispatch<React.SetStateAction<boolean>>;

interface TimerProps {
  setStop: SetStopFunction;
  questionNumber: number;
}

/**
 * Component
 */
const Timer = ({ setStop, questionNumber }: TimerProps) => {
  /**
   * State
   */
  const [timer, setTimer] = useState(30);

  /**
   * LifeCycles
   */
  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((currentSecond) => currentSecond - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return (
    <div className="h-5 w-5 flex justify-center items-center rounded-full bg-primary-color p-8 border-white border-2">
      {timer}
    </div>
  );
};

export default Timer;
