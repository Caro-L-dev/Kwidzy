/**
 * Package Import
 */
import React, { useRef } from "react";

/**
 * Local Import
 */
import { Bubble, Button } from "../../atoms";
import { AvatarChoice } from "../../molecules";

export default function Start({ setUsername }: { setUsername: string }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  // S'affiche au fur et à mesure - animation
  return (
    <div className="flex flex-col">
      <input
        className="rounded-full text-sm tracking-wide p-4 w-full bg-secondary-color placeholder-white focus:outline-none focus:bg-darker-secondary-color mb-6"
        type="text"
        id="pseudo"
        name="pseudo"
        required
        minLength={3}
        maxLength={8}
        placeholder="Quel est ton pseudo ?"
        ref={inputRef}
      />
      <div className="mt-6">
        <AvatarChoice />
        <Bubble>Pret à te lancer user ?</Bubble>
        <Button
          type={"button"}
          variant={"primary"}
          className={"w-full mb-4"}
          rounded
          onClick={handleClick}
        >
          C'est parti !
        </Button>
      </div>
    </div>
  );
}
