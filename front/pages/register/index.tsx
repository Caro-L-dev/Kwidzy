/**
 * Package Import
 */
import React, { useState, FormEvent } from "react";
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
   * State
   */
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  /**
   * Actions
   */
  const handleClick = (path: string) => {
    if (path === "/register") {
      console.log("Je me rends sur la page S'inscrire");
      router.push(path);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Do validation here
    if (!formData.username || !formData.password || !formData.email) {
      alert("Prière de remplir tous les champs.");
      return;
    }

    // Call API to create user account
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Redirect to homePage (add successMsg later)
      router.push("/");
    } else {
      alert("Votre inscription a échoué. Veuillez recommencer.");
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <form onSubmit={handleSubmit}>
        <p>Pseudo</p>
        <Input
          name="username"
          bgColor={"bg-secondary-color"}
          value={formData.username}
          onChange={handleInputChange}
        />
        <p>Mot de Passe</p>
        <Input
          name="password"
          bgColor={"bg-tertiary-color"}
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <p>Email</p>
        <Input
          name="email"
          bgColor={"bg-primary-color"}
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Button rounded className={"mb-4"} type={"submit"} variant={"primary"}>
          S'inscrire
        </Button>
      </form>
    </div>
  );
}
