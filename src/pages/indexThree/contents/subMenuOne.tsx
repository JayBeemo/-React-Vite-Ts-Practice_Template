import Stepper from "@/components/common/stepper";
import Wrapper from "@/components/container/wrapper";
import { useEffect, useState } from "react";
import Box from "@/components/container/box";
import Button from "@/components/common/button";

export const SubMenuOne = () => {
  const step = ["Step 1", "Step 2", "Step 3"];
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <Wrapper className="flex flex-1 flex-col p-4 gap-4">
      <header className="flex justify-center">
        <h2>INDEX-3 Sub-1</h2>
      </header>
      <main className="flex flex-col relative w-full gap-4 items-center">
        <Stepper step={step} currentStep={currentStep} />
        {currentStep === 1 && (
          <Box
            smooth={true}
            className={`
            relative w-[40%] isTablet:w-[60%] isMobile:w-[90%] h-[200px]
          `}
          >
            <div className="p-4">
              <h1>This is Step 1</h1>
            </div>
            <footer className="absolute flex bottom-0 w-[100%] h-[50px] justify-end items-center p-4">
              <Button
                size="sm"
                color="blue"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Next
              </Button>
            </footer>
          </Box>
        )}
        {currentStep === 2 && (
          <Box
            smooth={true}
            className={`
              relative w-[40%] isTablet:w-[60%] isMobile:w-[90%] h-[200px]
            `}
          >
            <div className="p-4">
              <h1>This is Step 2</h1>
            </div>
            <footer className="absolute flex bottom-0 w-[100%] h-[50px] justify-end items-center p-4 gap-2">
              <Button
                size="sm"
                color="blue"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Prev
              </Button>
              <Button
                size="sm"
                color="blue"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Next
              </Button>
            </footer>
          </Box>
        )}
        {currentStep === 3 && (
          <Box
            smooth={true}
            className={`
              relative w-[40%] isTablet:w-[60%] isMobile:w-[90%] h-[200px]
            `}
          >
            <div className="p-4">
              <h1>This is Step 3</h1>
            </div>
            <footer className="absolute flex bottom-0 w-[100%] h-[50px] justify-end items-center p-4 gap-2">
              <Button
                size="sm"
                color="blue"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Prev
              </Button>
              <Button
                size="sm"
                color="cyan"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Complete
              </Button>
            </footer>
          </Box>
        )}
        {currentStep > 3 && (
          <Box
            smooth={true}
            className={`
              relative w-[40%] isMobile:w-[90%] h-[200px]
            `}
          >
            <div className="p-4">
              <h1>Step All Complete</h1>
            </div>
            <footer className="absolute flex bottom-0 w-[100%] h-[50px] justify-end items-center p-4 gap-2">
              <Button
                size="sm"
                color="blue"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Prev
              </Button>
            </footer>
          </Box>
        )}
      </main>
    </Wrapper>
  );
};

export default SubMenuOne;
