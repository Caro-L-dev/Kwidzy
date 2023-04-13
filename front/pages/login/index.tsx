/**
 * Package Import
 */
import React, { useState } from "react";

/**
 * Page
 */
export default function loginPage() {
  /**
   * State
   */
  const [usernameRegister, setUsernameRegistration] = useState("");
  const [passwordRegister, setPasswordRegistration] = useState("");

  return (
    <div className="flex flex-col justify-center">
      {/* REGISTER */}
      <div className="mb-6">
        <div className="flex flex-col">
          <label htmlFor="">username</label>
          <input
            type="text"
            onChange={(event) => {
              setUsernameRegistration(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">password</label>
          <input
            type="text"
            onChange={(event) => {
              setPasswordRegistration(event.target.value);
            }}
          />
        </div>
        <button>S'inscrire</button>
      </div>

      {/* LOGIN */}
      <div>
        <h1>Se connecter</h1>
        <div className="flex flex-col">
          <input className="mb-2" type="text" placeholder="username..." />
          <input className="mb-2" type="password" placeholder="password..." />
        </div>
        <button>Se connecter</button>
      </div>
    </div>
  );
}
