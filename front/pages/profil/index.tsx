/**
 * Package Import
 */
import React from "react";
import { useRouter } from "next/router";

/**
 * Local Import
 */
import { SubTitle, Button } from "@/src/components/atoms";
import Link from "next/link";

/**
 * Page
 */
export default function ProfilePage() {
  const router = useRouter();

  const handleClick = (path: string) => {
    if (path === "/register") {
      console.log("Je me rends sur la page S'inscrire");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <div
          className="bg-white h-24 w-24 rounded-full mb-2"
          aria-hidden="true"
        />
        <SubTitle name="Pouki78" />
        <p className="text-xs">Compte invité</p>
      </div>

      <div className="my-6 mb-4">
        <h3>Mes avatars débloqués</h3>
        <div className="flex my-2">
          <div
            className="bg-white h-12 w-12 rounded-full mr-2"
            aria-hidden="true"
          />
          <div className="bg-white h-12 w-12 rounded-full" aria-hidden="true" />
        </div>
      </div>

      <div className="flex justify-between mb-4">
        <p>Son</p>
        <p>Toggle</p>
      </div>

      <Link href="/register">
        <Button
          rounded
          className={"mb-4"}
          type={"submit"}
          variant={"primary"}
          onClick={() => handleClick("/register")}
        >
          Créer un compte
        </Button>
      </Link>
      <Button rounded className={"mb-4"} type={"submit"} variant={"tertiary"}>
        Se déconnecter
      </Button>
    </>
  );
}
