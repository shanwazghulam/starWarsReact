import React from "react";

const Basket = ({ basketData }) => {
  const setTotal = () => {
    let total = 0;
    for (let i = 0; i < basketData.length; i++) {
      // console.log(this.state.basket[i]);

      total = total + Number(basketData[i].cost_in_credits);
    }
    return total;
  };
  return (
    <div className="basket">
      <div className="basketItem">
        <h1>Panier</h1>
        {basketData &&
          basketData.map(basket => {
            return (
              <div key={basket.id}>
                <span>{basket.name}</span>

                <span>{basket.cost_in_credits}</span>
              </div>
            );
          })}
        <div className="total">Total : {setTotal()}$</div>
      </div>
    </div>
  );
};

export default Basket;
