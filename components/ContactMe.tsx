import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import {
  useForm,
  SubmitHandler,
} from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } =
    useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (
    formData
  ) => {
    window.location.href = `mailto:elouazzaniyassine87@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="mt-40 translate-y-20 lg:-translate-y-10">
      <h3 className=" uppercase tracking-[20px] text-gray-500 text-center text-2xl lg:my-16">
        Contact
      </h3>
      <div className="relative z-0 flex flex-col items-center max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly">
        <div className="flex flex-col space-y-6">
          <h4 className="text-lg lg:text-2xl mx-auto w-[60%] sm:w-full md:text-4xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A]/50 underline">
              Lets Talk.
            </span>
          </h4>

          <div className="space-y-2 md:space-y-4 lg:space-y-8">
            <div className="flex items-center justify-center space-x-5">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">
                +212 687007388
              </p>
            </div>

            <div className="flex items-center justify-center space-x-5">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-lg lg:text-2xl">
                elouazzaniyassine87@gmail.com
              </p>
            </div>

            <div className="flex items-center justify-center space-x-5">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">
                Morocco 🇲🇦 - Tanger
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col px-8 space-y-2 w-fit"
          >
            <div className="flex flex-col items-center gap-2 md:flex-row justify-content ">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>

            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#F7AB0A] py-2 px-10 rounded-md text-black font-bold text-lg "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
