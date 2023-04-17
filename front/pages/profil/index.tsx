/**
 * Package Import
 */
import React from "react";
import { useRouter } from "next/router";

/**
 * Local Import
 */
import {
  SubTitle,
  Button,
  Avatar,
  Logo,
  Triangle,
} from "@/src/components/atoms";
import Link from "next/link";

/**
 * Image Import
 */
import avatarImg from "@/public/assets/images/avatar.png";

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
          className="bg-tertiary-color h-24 w-24 rounded-full mb-2 border-4 border-secondary-color flex justify-center items-center"
          aria-hidden="true"
        >
          <span>K</span>
        </div>

        <SubTitle name="Joueur" />
        <p className="text-xs mb-6">Compte invité</p>
      </div>
      {/* 
      <div className="my-6 mb-4">
        <h3>Mes avatars débloqués</h3>
        <div className="flex my-2">
          <div
            className="bg-white h-12 w-12 rounded-full mr-2"
            aria-hidden="true"
          />
          <div className="bg-white h-12 w-12 rounded-full" aria-hidden="true" />
        </div>
      </div> */}

      {/* <div className="flex justify-between mb-4">
        <p>Son</p>
        <p>Toggle</p>
      </div> */}

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
