"use client";

import MotionDiv from "@/components/wrappers/motion/div";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

type Inputs = {
  full_name: string;
  email: string;
  phone: string;
  message: string;
};

const variants = {
  start: {
    scale: 0.2,
    rotate: 0,
  },
  end: {
    scale: 1,
    rotate: 360,
  },
};
const ContactSection = ({ item }: { item: Object }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: "all" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
    const response = await fetch(
      "https://formsubmit.co/ajax/fb3022a83c41110fecf7e96d19086e5f",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      }
    );
    const result = await response.json();
    setLoading(false);
    setMessageSent(true);
  };

  if (loading) {
    return (
      <div className="md:mt-40 w-50 h-20 flex justify-center">
        {[0, 0.3, 0.5, 0.7, 0.9].map((delay) => (
          <MotionDiv
            key={delay}
            className="w-4 h-4 m-2 bg-white inline-block"
            variants={variants}
            initial="start"
            animate="end"
            transition={{
              repeat: "Infinity",
              repeatType: "reverse",
              ease: "anticipate",
              duration: 1,
              delay,
            }}
          />
        ))}
      </div>
    );
  }

  if (messageSent) {
    return (
      <div className="text-white md:mt-40 w-50 h-20">
        Message sent!
        <MotionDiv
          variants={item}
          className="mt-10 flex justify-center gap-x-6"
        >
          <Link
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-transparent text-[#f0b90c] border border-[#f0b90c] hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
            href="/"
          >
            Go to Homepage
          </Link>
        </MotionDiv>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto w-72 md:w-96 mt-10">
        <MotionDiv
          variants={item}
          className="relative h-10 w-full min-w-[200px]"
        >
          <input
            className={`${
              errors?.full_name
                ? "!border-red-600 !placeholder-shown:border-t-red-600"
                : ""
            } peer h-full w-full rounded-[7px] border border-white bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all border-t-transparent placeholder-shown:border placeholder-shown:border-t-white focus:border-2 focus:border-[#f0b90c] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
            placeholder=" "
            {...register("full_name", { required: true })}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f0b90c] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#f0b90c] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#f0b90c] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Full Name *
          </label>
        </MotionDiv>
        <MotionDiv
          variants={item}
          className="relative h-10 w-full min-w-[200px] mt-5"
        >
          <input
            className={`${
              errors?.email
                ? "border-red-600 placeholder-shown:border-t-red-600"
                : ""
            } peer h-full w-full rounded-[7px] border border-white bg-transparent border-t-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all border-t-transparent placeholder-shown:border placeholder-shown:border-t-white focus:border-2 focus:border-[#f0b90c] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
            placeholder=" "
            {...register("email", { required: true })}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f0b90c] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#f0b90c] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#f0b90c] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Email *
          </label>
        </MotionDiv>
        <MotionDiv
          variants={item}
          className="relative h-10 w-full min-w-[200px] mt-5"
        >
          <input
            className="peer h-full w-full rounded-[7px] border border-white bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all border-t-transparent placeholder-shown:border placeholder-shown:border-t-white focus:border-2 focus:border-[#f0b90c] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            {...register("phone")}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f0b90c] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#f0b90c] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#f0b90c] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Phone
          </label>
        </MotionDiv>
        <MotionDiv
          variants={item}
          className="relative h-32 w-full min-w-[200px] mt-5"
        >
          <textarea
            className={`${
              errors?.message
                ? "border-red-600 placeholder-shown:border-t-red-600"
                : ""
            } peer h-full w-full rounded-[7px] border border-white bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border border-t-transparent placeholder-shown:border placeholder-shown:border-t-white focus:border-2 focus:border-[#f0b90c] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
            placeholder=" "
            {...register("message", { required: true })}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f0b90c] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#f0b90c] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#f0b90c] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            How can we help you? *
          </label>
        </MotionDiv>
        <MotionDiv
          variants={item}
          className="mt-10 flex justify-center gap-x-6"
        >
          <button
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-transparent text-[#f0b90c] border border-[#f0b90c] hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
            type="submit"
          >
            Send message
          </button>
        </MotionDiv>
      </div>
    </form>
  );
};

export default ContactSection;
