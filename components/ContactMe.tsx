import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:lukeknightofficial@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.
    ${formData.message} (${formData.email})`;
  };
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 
    justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32  uppercase tracking-[1rem] text-gray-500 text-2xl md:top-20">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Reach out for Business Propositions.{ ' ' }
          <span className="underline decoration-[#2BAAE2]/50">Lets Talk</span>
        </h4>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#2BAAE2] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+44769333333</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#2BAAE2] h-7 w-7 animate-pulse" />
            <p className="text-2xl">lukeknightofficial@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#2BAAE2] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Developer Lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="contactInput"
            />
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="contactInput"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            className="bg-[#2BAAE2] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
