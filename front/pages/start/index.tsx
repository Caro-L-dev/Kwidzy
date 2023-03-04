import MainBtn from "@/components/atoms/Button/MainBtn";
import React from "react";

export default function index() {
  return (
    <div className="h-screen md:px-96 flex flex-col justify-between">
      <input
        className="rounded-full p-4 w-full bg-secondary-color placeholder-white focus:outline-none focus:bg-darker-secondary-color"
        type="text"
        id="pseudo"
        name="pseudo"
        required
        minLength={3}
        maxLength={8}
        placeholder="Quel est ton pseudo ?"
      />
      <div>
        <h2 className="font-bold text-2xl">Choix de votre avatar</h2>
        <div>
          <img src="#" alt="Avatar ananas" />
        </div>
      </div>
      <p className="p-4 bg-tertiary-color rounded-full mb-6">
        Pret à te lancer ?
      </p>
      <MainBtn>
        <a href="/categories" className="text-4xl font-bold">
          C'est parti !
        </a>
      </MainBtn>
    </div>
  );
}
