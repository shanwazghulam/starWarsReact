import React from "react";

const CarCards = ({ dataCar, setReserved }) => {
  return (
    <div className="itemCard">
      {dataCar &&
        dataCar.map((obj, index) => {
          return (
            <div key={obj.id} className="cardCar">
              <h1>{obj.name}</h1>

              <span>Model :{obj.model}</span>

              <span>Place :{obj.passengers}</span>

              {obj.cost_in_credits !== "unknown" ? (
                <div>
                  <span>Crédit : {obj.cost_in_credits} </span>

                  <button onClick={() => setReserved(index)}>
                    {obj.reserved ? "Annuler ma réservation " : "Réserver"}
                  </button>
                </div>
              ) : (
                <span className="nonDispo">
                  La voiture n’est pas disponible à la location{" "}
                </span>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default CarCards;
