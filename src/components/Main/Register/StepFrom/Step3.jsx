import { useContext } from "react";
import { InputGroup } from "./Step1"; /* 引入InputGroup函式 */
import { RegisterContext } from "../../../Context/RegisterContext";
import classes from "./Step3.module.scss";

const Step3 = () => {
  const { register, setRegister } = useContext(RegisterContext);

  const changeInpurValue = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={classes.section}>
      <div>
        <h2>付款資訊</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.name}>
          <InputGroup
            label="持卡人姓名"
            placeholder="John Doe"
            onChange={changeInpurValue}
            name="creditName"
          />
        </div>
        <div className={classes.number}>
          <InputGroup
            label="卡號"
            placeholder="1111 2222 3333 4444"
            onChange={changeInpurValue}
            name="creditNumber"
          />
        </div>
        <div className={classes.valid}>
          <InputGroup
            label="有效期限"
            placeholder="MM/YY"
            onChange={changeInpurValue}
            name="creditExp"
          />
        </div>
        <div className={classes.cvc_ccv}>
          <InputGroup
            label="CVC/CCV"
            placeholder="123"
            onChange={changeInpurValue}
            name="creditCCV"
          />
        </div>
      </div>
    </section>
  );
};

export default Step3;
