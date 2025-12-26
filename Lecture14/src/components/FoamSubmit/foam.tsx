// yha p abb hame foam ka dekhna padega okkh!..

import React from "react";
import { useState } from "react";

const Foam = () => {
  const [email, setEmail] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Foam;
