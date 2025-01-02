import zod, { number } from "zod"

export const numeberSchema = zod.string.min(10).max(10).regex(/[0-9]/)

export const usernameSchema = zod.string()

export const emailSchema = zod.string().email()

export const passwordSchema = zod.string().min(8).max(20).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/).regex(/[!@#$%^&*]/);

export const signinBody = zod.object({
    username: usernameSchema,
    password: passwordSchema
})

export const signupWithEmailBody = zod.object({
    email: emailSchema,
    username: usernameSchema,
    password: passwordSchema
})

export const signupWithNumberBody = zod.object({
    number: numeberSchema,
    username: usernameSchema,
    password: passwordSchema
})

export const otpBody = zod.object({
    id: zod.string(),
    otp: zod.string().min(6).max(6).regex(/[0-9]/)
})

export const changeAvatarBody = zod.object({
    username: usernameSchema,
    avatarId: zod.number()
})