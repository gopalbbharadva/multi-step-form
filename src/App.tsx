import "./App.css";
import { StepCount } from "./components/ui/custom/StepCount";
import Mobile from "../public/images/bg-sidebar-mobile.svg";
import Desktop from "../public/images/bg-sidebar-desktop.svg";
import { Button } from "./components/ui/button";
import { StepOne } from "./components/ui/custom/StepOne";
import { StepTwo } from "./components/ui/custom/StepTwo";
import { StepThree } from "./components/ui/custom/StepThree";
import { StepFour } from "./components/ui/custom/StepFour";

export default function Home() {
  return (
    <div className="relative bg-magnolia h-screen md:flex md:justify-center items-center">
      <img className="w-full md:hidden" src={Mobile} />

      <div className="absolute top-10 flex justify-center items-center w-full gap-4 md:hidden">
        <StepCount count={1} className="bg-lightBlue text-marineBlue p-4" />
        <StepCount
          count={2}
          className="border border-alabaster text-alabaster p-4"
        />
        <StepCount
          count={3}
          className="border border-alabaster text-alabaster p-4"
        />
        <StepCount
          count={4}
          className="border border-alabaster text-alabaster p-4"
        />
      </div>

      <div className="flex justify-start items-start bg-white p-4 rounded-lg gap-10">
        <div className="relative hidden md:block">
          <img src={Desktop} alt="Desktop image" />
          <div className="absolute z-10 top-0 p-8 flex justify-start items-start flex-col gap-4">
            <div className="flex justify-start items-start gap-2">
              <StepCount
                count={1}
                className="bg-lightBlue text-marineBlue p-4"
              />
              <div className="flex justify-start items-start flex-col">
                <p className="text-lightGray text-sm">STEP 1</p>
                <p className="text-white font-medium uppercase">Your info</p>
              </div>
            </div>

            <div className="flex justify-start items-start gap-2">
              <StepCount
                count={2}
                className="border border-alabaster text-alabaster p-4"
              />
              <div className="flex justify-start items-start flex-col">
                <p className="text-lightGray text-sm">STEP 2</p>
                <p className="text-white font-medium uppercase">Select plan</p>
              </div>
            </div>

            <div className="flex justify-start items-start gap-2">
              <StepCount
                count={3}
                className="border border-alabaster text-alabaster p-4"
              />
              <div className="flex justify-start items-start flex-col">
                <p className="text-lightGray text-sm">STEP 3</p>
                <p className="text-white font-medium uppercase">Add-ons</p>
              </div>
            </div>

            <div className="flex justify-start items-start gap-2">
              <StepCount
                count={4}
                className="border border-alabaster text-alabaster p-4"
              />
              <div className="flex justify-start items-start flex-col">
                <p className="text-lightGray text-sm">STEP 4</p>
                <p className="text-white font-medium uppercase">Summary</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-lg flex justify-center items-start py-10 px-6 gap-2 self-stretch
          flex-col shadow-md absolute top-24 m-4 md:static md:shadow-none md:pb-0"
        >
          {/* <StepOne /> */}
          {/* <StepTwo /> */}
          {/* <StepThree /> */}
          <StepFour />
        </div>
      </div>
      <div className="bg-white mt-auto fixed bottom-0 w-full flex justify-end items-end p-4 md:hidden">
        <Button className="bg-marineBlue text-white rounded-sm">
          Next Step
        </Button>
      </div>
    </div>
  );
}
