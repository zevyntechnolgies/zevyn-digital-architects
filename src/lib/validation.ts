import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100),

  email: z
    .string()
    .email("Please enter a valid email address"),

  company: z
    .string()
    .max(100)
    .optional()
    .or(z.literal("")),

  website: z
    .string()
    .url("Please enter a valid website URL")
    .optional()
    .or(z.literal("")),

  projectType: z.enum([
    "Landing Page Development",
    "AI Integration",
    "Digital Marketing",
    "CRM Solutions",
    "SEO Optimization",
    "Security Audit",
    "Custom Web Development",
    "UI/UX Design",
    "Other",
  ]),

  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;