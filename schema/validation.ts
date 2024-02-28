import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter Valid Email" }),
  password: z.string().min(1, { message: "Enter Password is required" }),
});

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "firstName is required" })
      .max(50, { message: "Name is too long" }),
    lastName: z
      .string()
      .min(1, { message: "lastName is required" })
      .max(50, { message: "Name is too long" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Enter Valid Email" }),
    password: z.string().min(1, { message: "Enter Password is required" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Optional: specifies the field to attach the error message to
  });

export const forgetSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter Valid Email" }),
});

export const resetPasswordSchema = z.object({
  newPassword: z.string().min(1, { message: "New Password is required" }),
  confirmPassword: z.string(),

}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // Optional: specifies the field to attach the error message to
});;

export type LoginSchemaType = z.infer<typeof loginSchema>;
export type SignUpSchemaType = z.infer<typeof signUpSchema>;
export type ForgetSchemaType = z.infer<typeof forgetSchema>;

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;
