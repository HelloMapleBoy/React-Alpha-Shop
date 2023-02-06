import { ReactComponent as Check } from "../../../assets/Icons/pg-complete.svg";
import classes from "./StepProgress.module.scss";

const ProgressBbar = ({ className }) => {
  return <span className={className}></span>;
};

const Step = ({ step, label, onCurrentClick }) => {
  return (
    <div className={classes.step}>
      <div
        className={
          onCurrentClick >= step ? classes.circleCurrent : classes.circle
        }
      >
        {onCurrentClick > step ? <Check /> : step}
      </div>
      <div
        className={onCurrentClick > step ? classes.labelCurrent : classes.label}
      >
        {label}
      </div>
    </div>
  );
};

const Stepper = ({ currentClick }) => {
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>結帳</h2>
      <div className={classes.container}>
        <Step step="1" label="寄送地址" onCurrentClick={currentClick} />
        <ProgressBbar
          className={
            currentClick > 1 ? classes.ProgressCurrent : classes.Progressbar
          }
        />
        <Step step="2" label="運送方式" onCurrentClick={currentClick} />
        <ProgressBbar
          className={
            currentClick > 2 ? classes.ProgressCurrent : classes.Progressbar
          }
        />
        <Step step="3" label="付款資訊" onCurrentClick={currentClick} />
      </div>
    </section>
  );
};

export default Stepper;
