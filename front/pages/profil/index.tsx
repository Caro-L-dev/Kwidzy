import React from "react";
import SubTitle from "@/components/atoms/SubTitle";
import { MainBtn } from "@/components/atoms/Button";
import Link from "next/link";

export default function index() {
  return (
    <div className="">
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

      <MainBtn>
        <Link href={"/register"}>Créer un compte</Link>
      </MainBtn>
      <MainBtn>Se déconnecter</MainBtn>
    </div>
  );
}
