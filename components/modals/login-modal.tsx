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
import { LoginSchemaType, loginSchema } from "@/utils/validation";
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

interface BodyProps {
  setData: Dispatch<SetStateAction<DataState>>;
}

export const LoginModal = () => {
  const { isOpen, onClose } = useLoginModal();
  const registerModal = useRegisterModal();

  const onTogle = useCallback(() => {
    onClose();
    registerModal.onOpen();
  }, [onClose, registerModal]);

  const [data, setData] = useState<DataState>({
    name: "",
    email: "",
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      body={<Body setData={setData} />}
      footer={<Footer onTogle={onTogle} />}
    />
  );
};

const Body: FC<BodyProps> = () => {
  const form = useForm<z.infer<LoginSchemaType>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<LoginSchemaType>) => {
    console.log(values);
  };

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-12">
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

const Footer: FC<{ onTogle: () => void }> = ({ onTogle }) => {
  return (
    <div className="text-neutral-400 text-center mb-4">
      <p>
        First time using X?{" "}
        <span
          className="text-white cursor-pointer hover:underline"
          onClick={onTogle}
        >
          Create an accaunt
        </span>
      </p>
    </div>
  );
};
