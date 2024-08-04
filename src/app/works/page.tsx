"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
const page = () => {
  const heading = "Works";
  const headingWords = heading.split(" ");
  const subHeading = "Textile flow";
  const subHeadingWords = subHeading.split(" ");

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i: any) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1 } }),
  };
  return (
    <>
      <Navbar dark={true} />
      <div className="lg:px-20 px-8 mx-auto max-w-7xl flex flex-col gap-10 euclid">
        <motion.h1
          className="pp text-black font-medium lg:text-7xl  text-4xl  text-balance  w-auto mt-12 "
          initial="hidden"
          animate="visible"
        >
          {" "}
          {headingWords.map((word, i) => (
            <motion.span key={word} variants={wordVariants} custom={i}>
              {word}{" "}
            </motion.span>
          ))}{" "}
        </motion.h1>
        <div className="lg:text-2xl text-base flex flex-col gap-5">
          {" "}
          <p>
            &quot;Hypeworz is a premium agency based in Chennai, India,
            specializing in designing, developing, and branding products for
            clients. With years of experience and a talented team, we are
            dedicated to delivering exceptional results. Our focus is on
            creating innovative and impactful solutions tailored to meet the
            unique needs of each client. From concept to execution, we strive
            for excellence and professionalism in every project we undertake.
            Trust Hypeworz to bring your vision to life and elevate your brand
            to new heights.&quot; &quot;Hypeworz is a premium agency based in
            Chennai, India, specializing in designing, developing, and branding
            products for clients. With years of experience and a talented team,
            we are dedicated to delivering exceptional results. Our focus is on
            creating innovative and impactful solutions tailored to meet the
            unique needs of each client. From concept to execution, we strive
            for excellence and professionalism in every project we undertake.
            Trust Hypeworz to bring your vision to life and elevate your brand
            to new heights.&quot;
          </p>
          <p>
            &quot;Hypeworz is a premium agency based in Chennai, India,
            specializing in designing, developing, and branding products for
            clients. With years of experience and a talented team, we are
            dedicated to delivering exceptional results. Our focus is on
            creating innovative and impactful solutions tailored to meet the
            unique needs of each client. From concept to execution, we strive
            for excellence and professionalism in every project we undertake.
            Trust Hypeworz to bring your vision to life and elevate your brand
            to new heights.&quot; &quot;Hypeworz is a premium agency based in
            Chennai, India, specializing in designing, developing, and branding
            products for clients. With years of experience and a talented team,
            we are dedicated to delivering exceptional results. Our focus is on
            creating innovative and impactful solutions tailored to meet the
            unique needs of each client. From concept to execution, we strive
            for excellence and professionalism in every project we undertake.
            Trust Hypeworz to bring your vision to life and elevate your brand
            to new heights.&quot;
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/images/30.svg"
            alt=""
            width="1300"
            height={1000}
            className="w-full h-auto"
          />
        </div>
        <div className="flex lg:flex-row flex-col gap-5 my-10">
          <div className="flex flex-col gap-5">
            {" "}
            <motion.h1
              className="pp text-black font-medium lg:text-5xl  text-2xl  text-balance  w-auto mt-12 "
              initial="hidden"
              animate="visible"
            >
              {" "}
              {subHeadingWords.map((word, i) => (
                <motion.span key={word} variants={wordVariants} custom={i}>
                  {word}{" "}
                </motion.span>
              ))}{" "}
            </motion.h1>
            <p>
              &quot;Hypeworz is a premium agency based in Chennai, India,
              specializing in designing, developing, and branding products for
              clients. With years of experience and a talented team, we are
              dedicated to delivering exceptional results. Our focus is on
              creating innovative and impactful solutions tailored to meet the
              unique needs of each client. From concept to execution, we strive
              for excellence and professionalism in every project we undertake.
              Trust Hypeworz to bring your vision to life and elevate your brand
              to new heights.&quot; &quot;Hypeworz is a premium agency based in
              Chennai, India, specializing in designing, developing, and
              branding products for clients. With years of experience and a
              talented team, we are dedicated to delivering exceptional results.
              Our focus is on creating innovative and impactful solutions
              tailored to meet the unique needs of each client. From concept to
              execution, we strive for excellence and professionalism in every
              project we undertake. Trust Hypeworz to bring your vision to life
              and elevate your brand to new heights.&quot;
            </p>
            <div className="flex flex-row gap-3 rounded-lg bg-[#f4f6f8] px-5 py-2 w-max items-center text-lg justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33594 22.666L13.3359 22.666C14.0693 22.666 14.6693 22.066 14.6693 21.3327C14.6693 20.5994 14.0693 19.9994 13.3359 19.9994L9.33594 19.9994C7.13594 19.9994 5.33594 18.1994 5.33594 15.9994C5.33594 13.7994 7.13594 11.9994 9.33594 11.9994L13.3359 11.9994C14.0693 11.9994 14.6693 11.3994 14.6693 10.666C14.6693 9.93268 14.0693 9.33268 13.3359 9.33268L9.33594 9.33268C5.65594 9.33269 2.66927 12.3194 2.66927 15.9994C2.66927 19.6794 5.65594 22.666 9.33594 22.666ZM21.3359 15.9994C21.3359 15.266 20.7359 14.666 20.0026 14.666L12.0026 14.666C11.2693 14.666 10.6693 15.266 10.6693 15.9994C10.6693 16.7327 11.2693 17.3327 12.0026 17.3327L20.0026 17.3327C20.7359 17.3327 21.3359 16.7327 21.3359 15.9994ZM18.6693 11.9994L22.6693 11.9994C24.8693 11.9993 26.6693 13.7993 26.6693 15.9993C26.6693 18.1993 24.8693 19.9993 22.6693 19.9993L18.6693 19.9994C17.9359 19.9994 17.3359 20.5994 17.3359 21.3327C17.3359 22.066 17.9359 22.666 18.6693 22.666L22.6693 22.666C26.3493 22.666 29.3359 19.6793 29.3359 15.9993C29.3359 12.3193 26.3493 9.33268 22.6693 9.33268L18.6693 9.33268C17.9359 9.33268 17.3359 9.93268 17.3359 10.666C17.3359 11.3994 17.9359 11.9994 18.6693 11.9994Z"
                  fill="#1649FF"
                />
              </svg>
              <div>www.sculptgen.com</div>
            </div>
          </div>
          <div className="min-w-[60%]">
            <Image src="/images/31.svg" alt="" width={1000} height={1000} />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5 my-10">
          <div className="flex flex-col gap-5">
            {" "}
            <motion.h1
              className="pp text-black font-medium lg:text-5xl  text-2xl  text-balance  w-auto mt-12 "
              initial="hidden"
              animate="visible"
            >
              {" "}
              {subHeadingWords.map((word, i) => (
                <motion.span key={word} variants={wordVariants} custom={i}>
                  {word}{" "}
                </motion.span>
              ))}{" "}
            </motion.h1>
            <p>
              &quot;Hypeworz is a premium agency based in Chennai, India,
              specializing in designing, developing, and branding products for
              clients. With years of experience and a talented team, we are
              dedicated to delivering exceptional results. Our focus is on
              creating innovative and impactful solutions tailored to meet the
              unique needs of each client. From concept to execution, we strive
              for excellence and professionalism in every project we undertake.
              Trust Hypeworz to bring your vision to life and elevate your brand
              to new heights.&quot; &quot;Hypeworz is a premium agency based in
              Chennai, India, specializing in designing, developing, and
              branding products for clients. With years of experience and a
              talented team, we are dedicated to delivering exceptional results.
              Our focus is on creating innovative and impactful solutions
              tailored to meet the unique needs of each client. From concept to
              execution, we strive for excellence and professionalism in every
              project we undertake. Trust Hypeworz to bring your vision to life
              and elevate your brand to new heights.&quot;
            </p>
            <div className="flex flex-row gap-3 rounded-lg bg-[#f4f6f8] px-5 py-2 w-max items-center text-lg justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33594 22.666L13.3359 22.666C14.0693 22.666 14.6693 22.066 14.6693 21.3327C14.6693 20.5994 14.0693 19.9994 13.3359 19.9994L9.33594 19.9994C7.13594 19.9994 5.33594 18.1994 5.33594 15.9994C5.33594 13.7994 7.13594 11.9994 9.33594 11.9994L13.3359 11.9994C14.0693 11.9994 14.6693 11.3994 14.6693 10.666C14.6693 9.93268 14.0693 9.33268 13.3359 9.33268L9.33594 9.33268C5.65594 9.33269 2.66927 12.3194 2.66927 15.9994C2.66927 19.6794 5.65594 22.666 9.33594 22.666ZM21.3359 15.9994C21.3359 15.266 20.7359 14.666 20.0026 14.666L12.0026 14.666C11.2693 14.666 10.6693 15.266 10.6693 15.9994C10.6693 16.7327 11.2693 17.3327 12.0026 17.3327L20.0026 17.3327C20.7359 17.3327 21.3359 16.7327 21.3359 15.9994ZM18.6693 11.9994L22.6693 11.9994C24.8693 11.9993 26.6693 13.7993 26.6693 15.9993C26.6693 18.1993 24.8693 19.9993 22.6693 19.9993L18.6693 19.9994C17.9359 19.9994 17.3359 20.5994 17.3359 21.3327C17.3359 22.066 17.9359 22.666 18.6693 22.666L22.6693 22.666C26.3493 22.666 29.3359 19.6793 29.3359 15.9993C29.3359 12.3193 26.3493 9.33268 22.6693 9.33268L18.6693 9.33268C17.9359 9.33268 17.3359 9.93268 17.3359 10.666C17.3359 11.3994 17.9359 11.9994 18.6693 11.9994Z"
                  fill="#1649FF"
                />
              </svg>
              <div>www.sculptgen.com</div>
            </div>
          </div>
          <div className="min-w-[60%]">
            <Image src="/images/31.svg" alt="" width={1000} height={1000} />
          </div>
        </div>{" "}
        <div className="flex lg:flex-row flex-col gap-5 my-10">
          <div className="flex flex-col gap-5">
            {" "}
            <motion.h1
              className="pp text-black font-medium lg:text-5xl  text-2xl  text-balance  w-auto mt-12 "
              initial="hidden"
              animate="visible"
            >
              {" "}
              {subHeadingWords.map((word, i) => (
                <motion.span key={word} variants={wordVariants} custom={i}>
                  {word}{" "}
                </motion.span>
              ))}{" "}
            </motion.h1>
            <p>
              &quot;Hypeworz is a premium agency based in Chennai, India,
              specializing in designing, developing, and branding products for
              clients. With years of experience and a talented team, we are
              dedicated to delivering exceptional results. Our focus is on
              creating innovative and impactful solutions tailored to meet the
              unique needs of each client. From concept to execution, we strive
              for excellence and professionalism in every project we undertake.
              Trust Hypeworz to bring your vision to life and elevate your brand
              to new heights.&quot; &quot;Hypeworz is a premium agency based in
              Chennai, India, specializing in designing, developing, and
              branding products for clients. With years of experience and a
              talented team, we are dedicated to delivering exceptional results.
              Our focus is on creating innovative and impactful solutions
              tailored to meet the unique needs of each client. From concept to
              execution, we strive for excellence and professionalism in every
              project we undertake. Trust Hypeworz to bring your vision to life
              and elevate your brand to new heights.&quot;
            </p>
            <div className="flex flex-row gap-3 rounded-lg bg-[#f4f6f8] px-5 py-2 w-max items-center text-lg justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33594 22.666L13.3359 22.666C14.0693 22.666 14.6693 22.066 14.6693 21.3327C14.6693 20.5994 14.0693 19.9994 13.3359 19.9994L9.33594 19.9994C7.13594 19.9994 5.33594 18.1994 5.33594 15.9994C5.33594 13.7994 7.13594 11.9994 9.33594 11.9994L13.3359 11.9994C14.0693 11.9994 14.6693 11.3994 14.6693 10.666C14.6693 9.93268 14.0693 9.33268 13.3359 9.33268L9.33594 9.33268C5.65594 9.33269 2.66927 12.3194 2.66927 15.9994C2.66927 19.6794 5.65594 22.666 9.33594 22.666ZM21.3359 15.9994C21.3359 15.266 20.7359 14.666 20.0026 14.666L12.0026 14.666C11.2693 14.666 10.6693 15.266 10.6693 15.9994C10.6693 16.7327 11.2693 17.3327 12.0026 17.3327L20.0026 17.3327C20.7359 17.3327 21.3359 16.7327 21.3359 15.9994ZM18.6693 11.9994L22.6693 11.9994C24.8693 11.9993 26.6693 13.7993 26.6693 15.9993C26.6693 18.1993 24.8693 19.9993 22.6693 19.9993L18.6693 19.9994C17.9359 19.9994 17.3359 20.5994 17.3359 21.3327C17.3359 22.066 17.9359 22.666 18.6693 22.666L22.6693 22.666C26.3493 22.666 29.3359 19.6793 29.3359 15.9993C29.3359 12.3193 26.3493 9.33268 22.6693 9.33268L18.6693 9.33268C17.9359 9.33268 17.3359 9.93268 17.3359 10.666C17.3359 11.3994 17.9359 11.9994 18.6693 11.9994Z"
                  fill="#1649FF"
                />
              </svg>
              <div>www.sculptgen.com</div>
            </div>
          </div>
          <div className="min-w-[60%]">
            <Image src="/images/31.svg" alt="" width={1000} height={1000} />
          </div>
        </div>{" "}
        <div className="flex lg:flex-row flex-col gap-5 my-10">
          <div className="flex flex-col gap-5">
            {" "}
            <motion.h1
              className="pp text-black font-medium lg:text-5xl  text-2xl  text-balance  w-auto mt-12 "
              initial="hidden"
              animate="visible"
            >
              {" "}
              {subHeadingWords.map((word, i) => (
                <motion.span key={word} variants={wordVariants} custom={i}>
                  {word}{" "}
                </motion.span>
              ))}{" "}
            </motion.h1>
            <p>
              &quot;Hypeworz is a premium agency based in Chennai, India,
              specializing in designing, developing, and branding products for
              clients. With years of experience and a talented team, we are
              dedicated to delivering exceptional results. Our focus is on
              creating innovative and impactful solutions tailored to meet the
              unique needs of each client. From concept to execution, we strive
              for excellence and professionalism in every project we undertake.
              Trust Hypeworz to bring your vision to life and elevate your brand
              to new heights.&quot; &quot;Hypeworz is a premium agency based in
              Chennai, India, specializing in designing, developing, and
              branding products for clients. With years of experience and a
              talented team, we are dedicated to delivering exceptional results.
              Our focus is on creating innovative and impactful solutions
              tailored to meet the unique needs of each client. From concept to
              execution, we strive for excellence and professionalism in every
              project we undertake. Trust Hypeworz to bring your vision to life
              and elevate your brand to new heights.&quot;
            </p>
            <div className="flex flex-row gap-3 rounded-lg bg-[#f4f6f8] px-5 py-2 w-max items-center text-lg justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33594 22.666L13.3359 22.666C14.0693 22.666 14.6693 22.066 14.6693 21.3327C14.6693 20.5994 14.0693 19.9994 13.3359 19.9994L9.33594 19.9994C7.13594 19.9994 5.33594 18.1994 5.33594 15.9994C5.33594 13.7994 7.13594 11.9994 9.33594 11.9994L13.3359 11.9994C14.0693 11.9994 14.6693 11.3994 14.6693 10.666C14.6693 9.93268 14.0693 9.33268 13.3359 9.33268L9.33594 9.33268C5.65594 9.33269 2.66927 12.3194 2.66927 15.9994C2.66927 19.6794 5.65594 22.666 9.33594 22.666ZM21.3359 15.9994C21.3359 15.266 20.7359 14.666 20.0026 14.666L12.0026 14.666C11.2693 14.666 10.6693 15.266 10.6693 15.9994C10.6693 16.7327 11.2693 17.3327 12.0026 17.3327L20.0026 17.3327C20.7359 17.3327 21.3359 16.7327 21.3359 15.9994ZM18.6693 11.9994L22.6693 11.9994C24.8693 11.9993 26.6693 13.7993 26.6693 15.9993C26.6693 18.1993 24.8693 19.9993 22.6693 19.9993L18.6693 19.9994C17.9359 19.9994 17.3359 20.5994 17.3359 21.3327C17.3359 22.066 17.9359 22.666 18.6693 22.666L22.6693 22.666C26.3493 22.666 29.3359 19.6793 29.3359 15.9993C29.3359 12.3193 26.3493 9.33268 22.6693 9.33268L18.6693 9.33268C17.9359 9.33268 17.3359 9.93268 17.3359 10.666C17.3359 11.3994 17.9359 11.9994 18.6693 11.9994Z"
                  fill="#1649FF"
                />
              </svg>
              <div>www.sculptgen.com</div>
            </div>
          </div>
          <div className="min-w-[60%]">
            <Image src="/images/31.svg" alt="" width={1000} height={1000} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
