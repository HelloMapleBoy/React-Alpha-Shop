import classes from "./Step2.module.scss";

const Step2 = () => {
  const RadioGroup = ({ text, price, period }) => {
    return (
      <div className={classes.shipping__container}>
        <input type="radio" name="delivery" />
        <label className={classes.shipping__label}>
          <div className={classes.shipping}>
            <div>{text}</div>
            <div>{price}</div>
          </div>
          <div>{period}</div>
        </label>
      </div>
    );
  };

  return (
    <section className={classes.section}>
      <div className={classes.shipping__title}>
        <h2>運送方式</h2>
      </div>
      <div className={classes.container}>
        <RadioGroup text="標準運送" price="免費" period="約3~7個工作天" />
        <RadioGroup text="DHL 貨運" price="$500" period="48 小時內送達" />
      </div>
    </section>
  );
};

export default Step2;
