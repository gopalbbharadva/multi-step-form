import { Button } from "../button";
import { Typography } from "./typography";

export const StepFour = () => {
  return (
    <>
      <Typography
        text="Finishing up"
        variant="heading"
        className="text-marineBlue"
      />
      <Typography
        text="Double-check everything looks OK before confirming."
        variant="subheading"
        className="text-coolGray p-0 m-0 text-start leading-6 font-normal"
      />

      <div className="w-full flex justify-start items-center flex-col h-full gap-4 mt-5">
        <div className="w-full bg-magnolia px-4 py-2 rounded-lg">
          <div className="flex justify-between items-center w-full py-2 border-b border-lightGray">
            <div className="flex justify-start items-start flex-col">
              <p className="text-marineBlue font-bold">Arcade (Monthly)</p>
              <button className="p-0 m-0 text-coolGray text-sm underline">
                Change
              </button>
            </div>
            <p className="text-marineBlue font-bold">$9/mo</p>
          </div>

          <div className="flex justify-between items-center text-sm py-2">
            <p className="text-coolGray">Online service</p>
            <p className="text-marineBlue">+$1/mo</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p className="text-coolGray">Largest storage</p>
            <p className="text-marineBlue">+$2/mo</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full px-4">
          <p className="text-coolGray">Total (per month)</p>
          <p className="font-bold text-purplishBlue"> +$12/mo</p>
        </div>
        <div className="flex justify-between items-center w-full mt-auto">
          <Button
            className="hover:text-marineBlue text-coolGray hidden md:block"
            variant="ghost"
          >
            Go Back
          </Button>
          <Button className="bg-purplishBlue text-white rounded-md ml-auto self-end hidden md:block">
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};
