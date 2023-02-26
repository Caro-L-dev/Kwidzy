import Button from "@/components/Button/Button";
import React from "react";

export default function index() {
  return (
    <div>
      <input
        className="rounded-full p-4 w-full"
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
        <p className="p-4 bg-[#3FC6E3] rounded-full mb-6">Pret à te lancer ?</p>
        <Button>
          <a href="/categories" className="text-2xl font-bold">
            C'est parti !
          </a>
        </Button>
      </div>
    </div>
  );
}
