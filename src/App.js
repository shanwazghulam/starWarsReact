import React from "react";

import axios from "axios";
import CarCars from "./component/CarCards";
import Basket from "./component/Basket";

class App extends React.Component {
  state = {
    dataCar: null,
    basketData: []
  };

  setReserved = index => {
    let newData = this.state.dataCar;
    let newBasket = this.state.basketData;
    newData[index].reserved = !newData[index].reserved;
    if (newData[index].reserved) {
      newBasket.push(newData[index]);
    } else {
      newBasket = newBasket.filter(element => element.id !== newData[index].id);
    }

    this.setState({ dataCar: newData, basketData: newBasket });
  };

  //On ajoute reserved et id dans le tableau d'objet
  manageData = data => {
    data = data.map((elem, index) => {
      return { ...elem, reserved: false, id: index };
    });
    this.setState({ dataCar: data });
  };

  //On recupère l'API des vehicule
  componentDidMount = () => {
    axios.get("https://swapi.co/api/vehicles/?page=2").then(response => {
      // this.setState({ dataCar: response.data.results });
      this.manageData(response.data.results);
      // console.log(response.data);
    });
  };
  render = () => {
    return (
      <div>
        <CarCars dataCar={this.state.dataCar} setReserved={this.setReserved} />
        <Basket basketData={this.state.basketData} />
      </div>
    );
  };
}

export default App;
