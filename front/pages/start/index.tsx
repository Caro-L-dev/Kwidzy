import React from "react";

// Component Import
import Bubble from "@/components/atoms/Bubble";
import MainBtn from "@/components/atoms/Button/MainBtn";
import AvatarChoice from "@/components/molecules/AvatarChoice/AvatarChoice";

export default function index() {
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
        <MainBtn>
          <a href="/categories" className="text-lg tracking-wider font-bold">
            C'est parti !
          </a>
        </MainBtn>
      </div>
    </div>
  );
}
