"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { color } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });
const upper = [
  {
    text: "Custom Software Development",
    color: "#008022",
  },
  {
    text: "Brand Strategy",
    color: "#E23336",
  },
  {
    text: "Logo Design",
    color: "#E23336",
  },
  {
    text: "Brand Collateral",
    color: "#008022",
  },
];
const lower = [
  {
    text: "Digital Marketing",
    color: "#008022",
  },
  {
    text: "Social Media Management",
    color: "#545DC5",
  },
  {
    text: "E-commerce Solutions",
    color: "#CA12C5",
  },
  {
    text: "Content Creation",
    color: "#545DC5",
  },
  {
    text: "Product Prototyping",
    color: "#CA12C5",
  },
];
const mUpper = [
  {
    text: "Product Prototyping",
    color: "#008022",
  },
  {
    text: "E-commerce Solutions",
    color: "#1649FF",
  },
];
const mLower = [
  {
    text: "UI/UX Design",
    color: "#FF4100",
  },
  {
    text: "Graphic Design",
    color: "#008022",
  },
  {
    text: "Brand Strategy",
    color: "#FF4100",
  },
];
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phoneNumber: z
    .string()
    .min(7, {
      message: "Invalid phone number",
    })
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  email: z.string().email(),
  message: z.string().optional(),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="bg-[#F1F0F0]">
      <Navbar dark />
      <div className="max-w-7xl my-10 bg-[#F1F0F0] mx-auto flex-col flex gap-10 relative">
        <div className="absolute lg:block hidden top-1/2 -left-14 -rotate-12 euclid text-[#4C4837] bg-[#EEE1AA] py-10 px-5 max-w-[300px]">
          “Our Vision is to provide participants with comprehensive guidance and
          support throughout their job search journey, and to enhance
          participants’ employability by improving their job search skills,
          interview techniques, and resume writing abilities
        </div>
        <div className=" lg:flex hidden flex-row gap-5 flex-wrap items-center justify-center">
          {" "}
          {upper.map((item) => (
            <Tag key={item.text} color={item.color}>
              {item.text}
            </Tag>
          ))}
        </div>
        <div className="flex lg:hidden flex-row gap-5 flex-wrap items-center justify-center">
          {" "}
          {mUpper.map((item) => (
            <Tag key={item.text} color={item.color}>
              {item.text}
            </Tag>
          ))}
        </div>
        <h2 className="euclid lg:text-8xl text-6xl text-balance text-center text-[#050505]">
          You name it, we deliver{" "}
        </h2>
        <div className="lg:flex hidden flex-row gap-5 flex-wrap items-center justify-center">
          {" "}
          {lower.map((item) => (
            <Tag key={item.text} color={item.color}>
              {item.text}
            </Tag>
          ))}
        </div>
        <div className="flex lg:hidden flex-row gap-5 flex-wrap items-center justify-center">
          {" "}
          {mLower.map((item) => (
            <Tag key={item.text} color={item.color}>
              {item.text}
            </Tag>
          ))}
        </div>
        <div className="bg-white mx-4 rounded-2xl py-10 px-10 gap-5 flex flex-col text-center max-w-[700px] lg:mx-auto">
          <h2 className="text-4xl euclid text-center">Contact us</h2>
          <p className={cn(poppins.className, "text-lg")}>
            Whether you have a project in mind, questions about our services, or
            just want to say hello, our team is ready to connect.{" "}
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col  justify-center"
            >
              <div className="flex w-full lg:flex-row flex-col gap-5 lg:items-center justify-center">
                {" "}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col items-start gap-2">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Sampreet Kulkani" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col items-start gap-2">
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <PhoneInput
                          defaultCountry="IN"
                          placeholder="8329987573"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-1 flex-col items-start gap-2">
                    {" "}
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="kulkarnisampreet9@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex flex-1 flex-col items-start gap-2">
                    {" "}
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full text-[#FFC700]">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
const Tag = ({ color, children }: any) => (
  <div
    className={cn(
      poppins.className,
      "lg:px-8 px-4 text-[#012742] rounded-xl lg:font-semibold bg-white lg:text-base text-sm lg:py-4 py-3 border"
    )}
    style={{ color }}
  >
    {children}
  </div>
);
export default Page;
