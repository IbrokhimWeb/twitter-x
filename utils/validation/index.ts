import * as z from "zod";

export const registerStepOneSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
});

export const registerStepTwoSchema = z.object({
  password: z.string().min(6),
  username: z.string().min(3),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export type RegisterStepOneSchemaType = typeof registerStepOneSchema;
export type RegisterStepOTwoSchemaType = typeof registerStepTwoSchema;
export type LoginSchemaType = typeof loginSchema;
