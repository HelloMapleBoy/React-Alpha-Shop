import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const StepFrom = ({ currentClick }) => {
  return (
    <>
      {currentClick === 1 && <Step1 />}
      {currentClick === 2 && <Step2 />}
      {currentClick === 3 && <Step3 />}
    </>
  );
};

export default StepFrom;
