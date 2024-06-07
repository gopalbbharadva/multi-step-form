import { Typography } from "./typography";
import Arcade from "../../../../public/images/icon-arcade.svg";
import Advanced from "../../../../public/images/icon-advanced.svg";
import Pro from "../../../../public/images/icon-pro.svg";
import { Switch } from "../switch";
import { Button } from "../button";

export const StepTwo = () => {
  return (
    <>
      <Typography
        text="Select your plan"
        variant="heading"
        className="text-marineBlue"
      />
      <Typography
        text="You have the option of monthly or yearly billing."
        variant="subheading"
        className="text-coolGray p-0 m-0 text-start leading-6 font-normal"
      />

      <div className="w-full flex justify-between items-center flex-col h-full">
        <div className="flex justify-start items-start gap-4 flex-col mt-2 md:mt-5 md:gap-6 w-full">
          <div className="flex justify-center items-center flex-col md:flex-row gap-3 md:gap-4 w-full">
            <div
              className="flex justify-start items-center 
          md:flex-col md:justify-start md:items-start
          gap-4 border border-lightGray w-full p-2 rounded-md cursor-pointer 
          hover:border hover:border-purplishBlue
          "
            >
              <img src={Arcade} alt="arcade" />
              <div className="flex justify-start items-start flex-col">
                <p>Arcade</p>
                <p>$9/mo</p>
              </div>
            </div>

            <div
              className="flex justify-start items-center 
          md:flex-col md:justify-start md:items-start   
          hover:border hover:border-purplishBlue
          gap-4 border border-lightGray w-full p-2 rounded-md cursor-pointer"
            >
              <img src={Advanced} alt="Advanced" />
              <div className="flex justify-start items-start flex-col">
                <p>Advanced</p>
                <p>$12/mo</p>
              </div>
            </div>

            <div
              className="flex justify-start items-center 
          md:flex-col md:justify-start md:items-start  
          hover:border hover:border-purplishBlue
          gap-4 border border-lightGray w-full p-2 rounded-md cursor-pointer"
            >
              <img src={Pro} alt="Pro" />
              <div className="flex justify-start items-start flex-col">
                <p>Pro</p>
                <p>$15/mo</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 bg-magnolia w-full p-3 rounded-lg ">
            <span className="text-marineBlue font-semibold">Monthly</span>
            <Switch className="text-white bg-marineBlue p-1" />
            <span className="text-coolGray font-semibold">Yearly</span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <Button
            className="hover:text-marineBlue text-coolGray hidden md:block"
            variant="ghost"
          >
            Go Back
          </Button>
          <Button className="bg-marineBlue text-white rounded-sm ml-auto self-end hidden md:block">
            Next Step
          </Button>
        </div>
      </div>
    </>
  );
};
