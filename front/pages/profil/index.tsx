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
    router.push(path);
  };

  return (
    <>
      <title>Kwidzy | Mon profil</title>
      <div className="flex flex-col justify-between items-center text-white">
        <div
          className="bg-tertiary-color h-24 w-24 rounded-full mb-2 border-4 border-secondary-color flex justify-center items-center "
          aria-hidden="true"
        >
          <span>K</span>
        </div>

        <SubTitle name="Joueur" />
        <p className="text-xs mb-6">Compte invité</p>
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

      <Link href="/login">
        <Button
          rounded
          className={"mb-4"}
          type={"submit"}
          variant={"secondary"}
          onClick={() => handleClick("/login")}
        >
          Se connecter
        </Button>
      </Link>
      <Button rounded className={"mb-4"} type={"submit"} variant={"tertiary"}>
        Se déconnecter
      </Button>
    </>
  );
}
