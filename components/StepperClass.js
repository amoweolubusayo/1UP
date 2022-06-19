import Stepper from "react-stepper-horizontal";
const StepperClass = () => {
  return (
    <div>
      <Stepper
        steps={[
          { title: "What is Solidity" },
          { title: "Quiz" },
          { title: "Deploy a smart contract" },
          { title: "Quiz" },
        ]}
        activeStep={0}
      />
    </div>
  );
};

export default StepperClass;
