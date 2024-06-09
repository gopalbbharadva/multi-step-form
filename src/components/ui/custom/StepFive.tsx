import Done from "../../../../public/images/icon-thank-you.svg";

export const StepFive = () => {
  return (
    <div className="flex justify-center items-center flex-col py-10 px-4">
      <img src={Done} alt="Thank you icon" />
      <p className="text-marineBlue text-3xl font-bold mt-8">Thank you!</p>
      <p className="text-coolGray mt-4 font-medium md:w-[30rem]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
