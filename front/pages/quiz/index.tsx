/**
 * Package Import
 */
import React from "react";

/**
 * Local Import
 */
import { Button, Score, Timer } from "../../components/atoms";

export default function index() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-[-15px] right-[-10px] md:relative md:flex md:justify-center">
          <Timer />
        </div>
      </div>
      <Score />

      <Button className={"mb-4"} type={"button"} variant={"tertiary"} rounded>
        Q1: Qui a conçu Facebook ?
      </Button>

      <div className="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4 md:mb-4">
        <Button className={"mb-2"} type={"button"} variant={"primary"} rounded>
          <span className="mr-4">A.</span>
          <p>Georges Clooney</p>
        </Button>

        <Button className={"mb-2"} type={"button"} variant={"primary"} rounded>
          <span className="mr-4">B.</span>
          <p>Marc Zuckerberg</p>
        </Button>

        <Button className={"mb-2"} type={"button"} variant={"primary"} rounded>
          <span className="mr-4">C.</span>
          <p>Falbala</p>
        </Button>

        <Button className={"mb-2"} type={"button"} variant={"primary"} rounded>
          <span className="mr-4">C.</span>
          <p>Bill Gates</p>
        </Button>
      </div>
    </>
  );
}
