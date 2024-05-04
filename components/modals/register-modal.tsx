"use client";

import { useLoginModal, useRegisterModal } from "@/utils/hooks";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  RegisterStepOTwoSchemaType,
  RegisterStepOneSchemaType,
  registerStepOneSchema,
  registerStepTwoSchema,
} from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Button from "../ui/button";

interface DataState {
  name: string;
  email: string;
}

interface RegisterStepsProps {
  setData: Dispatch<SetStateAction<DataState>>;
  setStep: Dispatch<SetStateAction<number>>;
}

export const RegisterModal = () => {
  const { isOpen, onClose } = useRegisterModal();
  const loginModal = useLoginModal();

  const onTogle = useCallback(() => {
    onClose();
    loginModal.onOpen();
  }, [onClose, loginModal]);
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState<DataState>({
    name: "",
    email: "",
  });

  const body =
    step === 1 ? (
      <RegisterStepOne setData={setData} setStep={setStep} />
    ) : (
      <RegisterStepTwo setData={setData} setStep={setStep} />
    );

  const footer = (
    <div className="text-neutral-400 text-center mb-4">
      <p>
        Already have an account?{" "}
        <span
          className="text-white cursor-pointer hover:underline"
          onClick={onTogle}
        >
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      body={body}
      footer={footer}
      isOpen={isOpen}
      onClose={onClose}
      step={step}
    />
  );
};

const RegisterStepOne: FC<RegisterStepsProps> = ({ setData, setStep }) => {
  const form = useForm<z.infer<RegisterStepOneSchemaType>>({
    resolver: zodResolver(registerStepOneSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<RegisterStepOneSchemaType>) => {
    setData(values);
    setStep(2);
  };

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-12">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          large
          fullWidth
          secondary
          label="Next"
          type="submit"
          disabled={isSubmitting}
        />
      </form>
    </Form>
  );
};

const RegisterStepTwo: FC<RegisterStepsProps> = ({ setData, setStep }) => {
  const form = useForm<z.infer<RegisterStepOTwoSchemaType>>({
    resolver: zodResolver(registerStepTwoSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<RegisterStepOTwoSchemaType>) => {
    console.log(values);
  };

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-12">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          large
          fullWidth
          secondary
          label="Register"
          type="submit"
          disabled={isSubmitting}
        />
      </form>
    </Form>
  );
};
