import React from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();

  const pushToHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Quizz</h1>
      <button onClick={pushToHome}>Retour Home</button>
    </div>
  );
}
