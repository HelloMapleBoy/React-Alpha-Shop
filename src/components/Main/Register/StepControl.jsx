import { ReactComponent as LeftArrow } from "../../../assets/Icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/Icons/right-arrow.svg";
import classes from "./StepControl.module.scss";

const StepControl = ({ currentClick, prevClick, nextClick, confirmClick }) => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {currentClick === 1 && (
          <>
            <button className={classes.preButton} onClick={prevClick} disabled>
              <LeftArrow disabled /> 上一步
            </button>
            <button className={classes.nextButton} onClick={nextClick}>
              下一步 <RightArrow />
            </button>
          </>
        )}
        {currentClick === 2 && (
          <>
            <button className={classes.preButton} onClick={prevClick}>
              <LeftArrow /> 上一步
            </button>
            <button className={classes.nextButton} onClick={nextClick}>
              下一步 <RightArrow />
            </button>
          </>
        )}
        {currentClick === 3 && (
          <>
            <button className={classes.preButton} onClick={prevClick}>
              <LeftArrow /> 上一步
            </button>
            <button className={classes.nextButton} onClick={confirmClick}>
              確認下單 <RightArrow />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default StepControl;
