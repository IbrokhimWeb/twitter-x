import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import Button from "../ui/button";

const Auth = () => {
  return (
    <div className="container h-screen mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen ">
        <Image
          width={450}
          height={450}
          src={`/images/x.svg`}
          alt="twitter-x logo"
          className="justify-self-center hidden md:block"
        />
        <div className="flex flex-col justify-center md:justify-between gap-6 h-full md:h-[70vh]">
          <div className="block md:hidden">
            <Image
              width={50}
              height={50}
              src={`/images/x.svg`}
              alt="twitter-x logo"
            />
          </div>
          <h1 className="text-6xl font-bold">Happening now</h1>
          <div className="w-full md:w-[60%] ">
            <h2 className="font-bold text-3xl mb-4">Join today.</h2>
            <div className="flex flex-col space-y-2">
              <Button
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <FcGoogle />
                    Sign up width google
                  </div>
                }
                fullWidth
                secondary
              />
              <Button
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <AiFillGithub />
                    Sign up width Github
                  </div>
                }
                fullWidth
                secondary
              />
              <div className="flex items-center justify-center">
                <span className="w-1/2 h-px bg-gray-700" />
                <p className="mx-4">or</p>
                <span className="w-1/2 h-px bg-gray-700" />
              </div>
              <Button label={"Create account"} fullWidth />
              <div className="text-[10px] text-gray-400">
                By signing up, you agree to the{" "}
                <span className="text-sky-500">Terms of Service</span> and
                <span className="text-sky-500"> Privacy Policy</span>, including
                <span className="text-sky-500"> Cookie Use</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] ">
            <h3 className="font-medium text-xl mb-4">
              Already have an account?
            </h3>
            <Button label={"Sign in"} fullWidth outline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
