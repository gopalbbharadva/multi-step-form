import React from "react";
import { Typography } from "./typography";
import { Checkbox } from "../checkbox";
import { Button } from "../button";

export const StepThree = () => {
  return (
    <>
      <Typography
        text="Pick add-ons"
        variant="heading"
        className="text-marineBlue"
      />
      <Typography
        text="Add-ons help enhance your gaming experience."
        variant="subheading"
        className="text-coolGray p-0 m-0 text-start leading-6 font-normal"
      />

      <div className="w-full flex justify-start items-center flex-col h-full gap-4 mt-5">
        <label
          htmlFor="add-on-1"
          className="flex justify-between items-center 
            w-full border px-4 py-2 border-lightGray rounded-md cursor-pointer 
            hover:border hover:border-purplishBlue"
        >
          <div className="flex justify-start items-center gap-4">
            <input
              type="checkbox"
              id="add-on-1"
              className="accent-purplishBlue w-4 h-4 "
            />
            <div className="flex justify-start items-start flex-col gap-1 pb-2">
              <p className="text-marineBlue font-medium">Online services</p>
              <p className="text-coolGray text-start leading-3 text-sm">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <span className="text-purplishBlue text-sm">+$2/mo</span>
        </label>

        <label
          htmlFor="add-on-2"
          className="flex justify-between items-center 
            w-full border px-4 py-2 border-lightGray rounded-md cursor-pointer
            hover:border hover:border-purplishBlue
            "
        >
          <div className="flex justify-start items-center gap-4">
            <input
              type="checkbox"
              id="add-on-2"
              className="accent-purplishBlue w-4 h-4 "
            />
            <div className="flex justify-start items-start flex-col gap-1 pb-2">
              <p className="text-marineBlue font-medium">Online services</p>
              <p className="text-coolGray text-start leading-3 text-sm">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <span className="text-purplishBlue text-sm">+$2/mo</span>
        </label>

        <label
          htmlFor="add-on-3"
          className="flex justify-between items-center 
            w-full border px-4 py-2 border-lightGray rounded-md cursor-pointer
            hover:border hover:border-purplishBlue
            "
        >
          <div className="flex justify-start items-center gap-4">
            <input
              type="checkbox"
              id="add-on-3"
              className="accent-purplishBlue w-4 h-4 "
            />
            <div className="flex justify-start items-start flex-col gap-1 pb-2">
              <p className="text-marineBlue font-medium">Online services</p>
              <p className="text-coolGray text-start leading-3 text-sm">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <span className="text-purplishBlue text-sm">+$2/mo</span>
        </label>
        <div className="flex justify-between items-center w-full mt-auto">
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
