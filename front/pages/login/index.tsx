import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/src/components/atoms";

const LoginForm = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const usernameInput = event.currentTarget.elements.namedItem(
      "username"
    ) as HTMLInputElement;
    const passwordInput = event.currentTarget.elements.namedItem(
      "password"
    ) as HTMLInputElement;
    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
      const response = await axios.post("http://localhost:3030/user", {
        username,
        password,
      });
      console.log(response.data);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-60 flex flex-col justify-center">
      <div>
        <label htmlFor="username">Pseudo :</label>
        <input
          type="text"
          id="username"
          name="username"
          className="text-black"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          className="text-black"
          required
        />
      </div>
      <Button type="submit" rounded className="text-white">
        Se connecter
      </Button>
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mt-3 rounded relative">
          Vous etes connecté.
        </div>
      )}
      {isError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-3 rounded relative">
          Aie aie, une erreur est survenue. Veuillez recommencer.
        </div>
      )}
    </form>
  );
};

export default LoginForm;
