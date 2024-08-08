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
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });
const upper = [
  "Custom Software Development",
  "Brand Strategy",
  "Logo Design",
  "Brand Collateral",
];
const lower = [
  "Digital Marketing",
  "Social Media Management",
  "E-commerce Solutions",
  "Content Creation",
  "Product Prototyping",
];
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
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
      <div className="max-w-7xl my-10 bg-[#F1F0F0] mx-auto flex-col flex gap-10">
        <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
          {" "}
          {upper.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
        <h2 className="euclid text-8xl text-center text-[#050505]">
          You name it, we deliver{" "}
        </h2>
        <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
          {" "}
          {lower.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
        <div className="bg-white py-10 px-10 gap-5 flex flex-col text-center ">
          <h2 className="text-4xl euclid text-center">Contact us</h2>
          <p className={cn(poppins.className, "text-xl")}>
            Whether you have a project in mind, questions about our services, or
            just want to say hello, our team is ready to connect.{" "}
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex gap-5 items-start">
                {" "}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start gap-2">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start gap-2">
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
              </div>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
const Tag = ({ children }: any) => (
  <div
    className={cn(
      poppins.className,
      "px-8 text-[#012742] rounded-md font-semibold bg-white py-4 border"
    )}
  >
    {children}
  </div>
);
export default Page;
