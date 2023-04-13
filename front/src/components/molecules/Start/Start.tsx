/**
 * Package Import
 */
import React, { useRef } from "react";

/**
 * Local Import
 */
import { Bubble, Button } from "@/src/components/atoms";
import { AvatarChoice } from "@/src/components/molecules";

/**
 * Component
 */
export default function Start({ setUsername }: { setUsername: any }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      setUsername(inputRef.current.value);
    } else {
      alert("N'oublie pas d'entrer ton pseudo avant de continuer.");
    }
  };

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
