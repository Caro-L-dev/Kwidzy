/**
 * Package Import
 */
import React from "react";
import router from "next/router";

/**
 * Local Import
 */
import { Bubble, Button } from "../../components/atoms";
import { AvatarChoice } from "../../components/molecules";

export default function index() {
  const handleClick = (path: string) => {
    if (path === "/categories") {
      console.log("Je me rends sur la page Catégories");
      router.push(path);
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
      />
      <div className="mt-6">
        <AvatarChoice />
        <Bubble>Pret à te lancer user ?</Bubble>
        <Button
          type={"button"}
          variant={"primary"}
          className={"w-full mb-4"}
          rounded
          onClick={() => handleClick("/categories")}
        >
          C'est parti !
        </Button>
      </div>
    </div>
  );
}
