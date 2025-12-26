import React from "react";

const Card = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h1>{name}</h1>
      {children}
    </div>
  );
};

export default Card;

// children hamm isliye use karte hai taki us children k accroding hmm sara data bhar paye uske andar okkh!..
// and ye ek tarikhe ka props hi hota hai ye dhyan rakhio and parnet s daat pass karte hai okkh!..
