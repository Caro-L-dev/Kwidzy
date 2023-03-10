import { MainBtn } from "@/components/atoms/Button";
import Input from "@/components/atoms/Input/Index";
import React from "react";

export default function index() {
  return (
    <div className="flex flex-col justify-center">
      <p>Pseudo</p>
      <Input bgColor={"bg-secondary-color"} />
      <p>Mot de Passe</p>
      <Input bgColor={"bg-tertiary-color"} />
      <p>Email</p>
      <Input bgColor={"bg-primary-color"} />
      <MainBtn>S'inscrire</MainBtn>
    </div>
  );
}
