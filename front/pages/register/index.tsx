/**
 * Package Import
 */
import React from "react";
import router from "next/router";

/**
 * Local Import
 */
import { Button, Input } from "@/src/components/atoms";

/**
 * Page
 */
export default function registerPage() {
  /**
   * Actions
   */
  const handleClick = (path: string) => {
    if (path === "/register") {
      console.log("Je me rends sur la page S'inscrire");
      router.push(path);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <p>Pseudo</p>
      <Input bgColor={"bg-secondary-color"} />
      <p>Mot de Passe</p>
      <Input bgColor={"bg-tertiary-color"} />
      <p>Email</p>
      <Input bgColor={"bg-primary-color"} />
      <Button
        rounded
        className={"mb-4"}
        type={"button"}
        variant={"primary"}
        onClick={() => handleClick("/register")}
      >
        S'inscrire
      </Button>
    </div>
  );
}
