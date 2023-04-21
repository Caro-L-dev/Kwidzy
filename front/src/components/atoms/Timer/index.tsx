/**
 * Package Import
 */
import React, { useEffect, useState } from "react";

/**
 * Types
 */
type SetDelayTimerStopFunction = React.Dispatch<React.SetStateAction<boolean>>;

interface TimerProps {
  setDelayTimerStop: SetDelayTimerStopFunction;
  nextQuestion: number;
}

/**
 * Component
 */
const Timer = ({ setDelayTimerStop, nextQuestion }: TimerProps) => {
  /**
   * State
   */
  const [delayTimer, setDelayTimer] = useState(30);

  /**
   * LifeCycles
   */
  useEffect(() => {
    if (delayTimer === 0) return setDelayTimerStop(true);
    const interval = setInterval(() => {
      setDelayTimer((currentSecond) => currentSecond - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setDelayTimerStop, delayTimer]);

  useEffect(() => {
    setDelayTimer(30);
  }, [nextQuestion]);

  return (
    <div className="h-5 w-5 flex justify-center items-center rounded-full bg-primary-color p-8 border-white border-2">
      {delayTimer}
    </div>
  );
};

export default Timer;
