import React from "react";
import "./styles.css";

const PetHeader = ({ name, type }) => (
  <div className="pet-header">
    <h1>Мій улюбленець: {name}</h1>
    <span className="badge">{type}</span>
  </div>
);

const PetStats = ({ age, breed, color }) => (
  <div className="pet-stats">
    <p>
      <strong>Вік:</strong> {age} роки
    </p>
    <p>
      <strong>Порода:</strong> {breed}
    </p>
    <p>
      <strong>Забарвлення:</strong> {color}
    </p>
  </div>
);

export default function App() {
  const myPet = {
    name: "Барон",
    type: "Собака",
    age: 3,
    breed: "Золотистий ретривер",
    color: "Кремовий",
    description:
      "Дуже дружелюбний пес, який обожнює гратися з м'ячем та плавати в озері.",
  };

  return (
    <div className="container">
      <div className="pet-card">
        <PetHeader name={myPet.name} type={myPet.type} />

        <PetStats age={myPet.age} breed={myPet.breed} color={myPet.color} />

        <div className="pet-description">
          <h3>Про улюбленця:</h3>
          <p>{myPet.description}</p>
        </div>
      </div>
    </div>
  );
}
