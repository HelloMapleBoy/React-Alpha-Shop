import { useContext, useState } from "react";
import { CardContext } from "../../Context/CardContext";
import { RegisterContext } from "../../Context/RegisterContext";
import StepProgress from "./StepProgress";
import StepControl from "./StepControl";
import StepFrom from "./StepFrom/StepFrom";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { products } = useContext(CardContext);
  const { register } = useContext(RegisterContext);

  const nextHandler = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevHandler = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const total = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  const confirmHandler = () => {
    console.log({ register });
    console.log(`Total is ${total(products)}`);
  };

  return (
    <>
      <StepProgress currentClick={currentStep} />
      <StepFrom currentClick={currentStep} />
      <StepControl
        currentClick={currentStep}
        prevClick={prevHandler}
        nextClick={nextHandler}
        confirmClick={confirmHandler}
      />
    </>
  );
};

export default Register;
