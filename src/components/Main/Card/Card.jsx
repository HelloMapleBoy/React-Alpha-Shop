import { useContext } from "react";
import { CardContext } from "../../Context/CardContext";

import { ReactComponent as Minus } from "../../../assets/Icons/minus.svg";
import { ReactComponent as Plus } from "../../../assets/Icons/plus.svg";
import classes from "./Card.module.scss";

const CartInfo = ({ text, amount }) => {
  return (
    <div className={classes.cartInfo}>
      <div>{text}</div>
      <div className={classes.amount}>{amount}</div>
    </div>
  );
};

const Card = () => {
  const { products, setProducts } = useContext(CardContext);

  const addItemHandler = (productId) => {
    let newProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  };

  const reduceItemsHandler = (productId) => {
    let newProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });
    newProducts = newProducts.filter((product) => product.quantity > 0);
    setProducts(newProducts);
  };

  const totalPrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });

    return total;
  };

  const CardItem = ({ id, name, img, price, quantity }) => {
    return (
      <div className={classes.cardSection} key={id}>
        <div>
          <img className={classes.cardImg} src={img} alt={name} />
        </div>
        <div className={classes.cardContainer}>
          <div className={classes.cardItem}>
            <div>{name}</div>
            <div className={classes.cardCount}>
              <Minus
                className={classes.minus}
                onClick={() => reduceItemsHandler(id)}
              />
              <span>{quantity}</span>
              <Plus
                className={classes.plus}
                onClick={() => addItemHandler(id)}
              />
            </div>
          </div>
          <span className={classes.cartTotal}>$ {quantity * price}</span>
        </div>
      </div>
    );
  };

  return (
    <section className={classes.section}>
      <h2 className={classes.card}>購物籃</h2>
      <div className={classes.container}>
        {products.map((product) => {
          return <CardItem {...product} key={product.id} />;
        })}
        <CartInfo text="運費" amount="免費" />
        <CartInfo text="小計" amount={`$ ${totalPrice(products)}`} />
      </div>
    </section>
  );
};

export default Card;
