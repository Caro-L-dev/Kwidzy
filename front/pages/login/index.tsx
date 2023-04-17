import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/src/components/atoms";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";

const Login = () => {
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
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center "
      >
        <div className=" shadow-md w-80 py-14 px-10 rounded overflow-hidden mb-4">
          <h2 className="border-3 border-primary-color rounded text-xl mb-10 font-bold tracking-widest sm:text-sm">
            Se connecter
          </h2>
          <div className="flex justify-center items-center border-b  border-solid mb-6 p-2">
            <AiOutlineUser className="" />
            <input
              placeholder="Pseudo"
              type="text"
              id="username"
              name="username"
              className=" border-0 outline-none bg-transparent w-full pb ml-2 placeholder:text-sm placeholder:text-white"
              required
            />
          </div>
          <div className="flex justify-center items-center border-b border-gray-400 border-solid mb-6 p-2">
            <AiOutlineLock />
            <input
              placeholder="Mot de passe"
              type="password"
              id="password"
              name="password"
              className="border-0 outline-none bg-transparent w-full pb ml-2 placeholder:text-sm placeholder:text-white"
              required
            />
          </div>
          <Button type="submit" rounded className="text-white">
            Se connecter
          </Button>
          {isSuccess && (
            <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              L'utilisateur a bien été enregistré.
            </div>
          )}
          {isError && (
            <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              Une erreur s'est produite lors de l'enregistrement de
              l'utilisateur.
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Login;
