import { useState, useContext } from "react";
import { CardContext } from "../Context/CardContext";
import { RegisterContext } from "../Context/RegisterContext";

import Register from "../Main/Register/Register";
import Card from "../Main/Card/Card";
import Container from "../UI/Container";
import classes from "./Main.module.scss";

const Main = () => {
  const initialCards = useContext(CardContext);
  const [products, setProducts] = useState(initialCards);

  const initialRegister = useContext(RegisterContext);
  const [register, setRegister] = useState(initialRegister);

  return (
    <Container className={classes.grid__container}>
      <RegisterContext.Provider value={{ register, setRegister }}>
        <CardContext.Provider value={{ products, setProducts }}>
          <Register />
          <Card />
        </CardContext.Provider>
      </RegisterContext.Provider>
    </Container>
  );
};

export default Main;
