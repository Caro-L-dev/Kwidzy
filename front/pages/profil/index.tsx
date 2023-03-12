/**
 * Package Import
 */
import React from "react";
import router from "next/router";

/**
 * Local Import
 */
import { SubTitle, Button } from "../../components/atoms";

export default function index() {
  const handleClick = (path: string) => {
    if (path === "/register") {
      console.log("Je me rends sur la page S'inscrire");
      router.push(path);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <div className="bg-white h-24 w-24 rounded-full mb-2" />
        <SubTitle subtitle="Pouki78" />
        <p className="text-xs">Compte invité</p>
      </div>

      <div className="my-6">
        <h3>Mes avatars débloqués</h3>
        <div className="flex my-2">
          <div className="bg-white h-12 w-12 rounded-full mr-2" />
          <div className="bg-white h-12 w-12 rounded-full" />
        </div>
      </div>

      <div className="flex justify-between">
        <p>Son</p>
        <p>Toggle</p>
      </div>

      <Button
        rounded
        className={""}
        type={"submit"}
        variant={"primary"}
        onClick={() => handleClick("/register")}
      >
        Créer un compte
      </Button>
      <Button rounded className={""} type={"submit"} variant={"tertiary"}>
        Se déconnecter
      </Button>
    </>
  );
}
