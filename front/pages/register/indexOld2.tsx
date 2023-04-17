import React, { useState } from "react";
import Axios from "axios";
import { Button, Input } from "@/src/components/atoms";

const userURL = "http://localhost:3030/register";

const register = () => {
  const [usernameReg, setUsernameReg] = useState<string>("");
  const [passwordReg, setPasswordReg] = useState<string>("");

  Axios.post(userURL, {
    username: usernameReg,
    password: passwordReg,
  }).then((response) => {
    console.log(response);
  });

  return (
    <div>
      {/* REGISTER PAGE */}
      <div className="flex flex-col justify-center w-full">
        <form action="#" method="post">
          <label htmlFor="username">Pseudo:</label>
          <Input
            name="username"
            bgColor={"bg-secondary-color"}
            required
            onChange={(event: {
              target: { value: React.SetStateAction<string> };
            }) => {
              setUsernameReg(event?.target.value);
            }}
          />
          <br />

          <label htmlFor="password">Mot de passe :</label>
          <Input
            name="password"
            bgColor={"bg-tertiary-color"}
            type="password"
            required
            onChange={(event: {
              target: { value: React.SetStateAction<string> };
            }) => {
              setPasswordReg(event?.target.value);
            }}
          />
          <label htmlFor="confirm_password">
            Confirmer votre mot de passe :
          </label>
          <Input
            type="password"
            bgColor={"bg-tertiary-color"}
            id="confirm_password"
            name="confirm_password"
            required
          />
          <br />
          <Button
            rounded
            className={"mb-4"}
            type={"submit"}
            variant={"primary"}
          >
            S'inscrire
          </Button>
        </form>
      </div>

      {/* CONNECTION PAGE */}

      <h2>Page de connection</h2>
      <form action="#" method="post">
        <label htmlFor="username">Pseudo:</label>
        <input type="text" id="username" name="username" required />
        <br />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" required />
        <br />

        <br />

        <Button rounded className={"mb-4"} type={"submit"} variant={"primary"}>
          Se connecter
        </Button>
      </form>
    </div>
  );
};

export default register;
