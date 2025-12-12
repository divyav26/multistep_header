import { useState } from "react";
import Dashboard from "./Dashboard";
import JobLists from "./JobLists";
import CreateJob from "./CreateJob";
import Candidates from "./Candidates";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "Dashboard", component: <Dashboard /> },
    { id: 2, title: "JobLists", component: <JobLists /> },
    { id: 3, title: "CreateJob", component: <CreateJob /> },
    { id: 4, title: "Candidates List", component: <Candidates /> },
  ];

  const StepComponent = steps[currentStep - 1].component;

  return (
    <div className="p-10">
      {/* Step Header UI */}
      <div className="w-full relative">
        <div className="absolute top-6 left-0 w-full h-1 bg-gray-300"></div>

        <div className="flex justify-between relative z-10">
          {steps.map((step) => {
            const isActive = currentStep === step.id;
            const isCompleted =
              currentStep > step.id || currentStep === steps.length;

            return (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`
                    h-12 w-12 rounded-full flex justify-center items-center text-white font-bold z-10
                    ${
                      isCompleted
                        ? "bg-green-600"
                        : isActive
                        ? "bg-blue-600"
                        : "bg-gray-400"
                    }
                  `}
                >
                  {isCompleted ? "✓" : step.id}
                </div>

                <p
                  className={`
                    mt-3 text-lg font-semibold
                    ${
                      isCompleted
                        ? "text-green-600"
                        : isActive
                        ? "text-blue-600"
                        : "text-gray-600"
                    }
                  `}
                >
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Render Component Here */}
      <div className="mt-10 p-4 border bg-white shadow rounded-lg">
        {StepComponent}
      </div>

      {/* Navigation Button */}
      <div className="flex justify-center items-center gap-4">
        {currentStep > 1 && (
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="mt-5 px-4 py-2 bg-black text-white rounded"
          >
            Previous
          </button>
        )}
        {currentStep < steps.length && (
          <button
            onClick={() => setCurrentStep((prev) => prev + 1)}
            className="mt-5 px-4 py-2 bg-black text-white rounded"
          >
            Next
          </button>
        )}

        {currentStep === steps.length && (
          <button className="mt-5 px-4 py-2 bg-green-600 text-white rounded">
            Finish
          </button>
        )}
      </div>
    </div>
  );
}
