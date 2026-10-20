import { z } from "zod";

export const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
    SUPABASE_URL: z.string().url(),
    SUPABASE_PUBLISHABLE_KEY: z.string(),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
})

// Validate and parse the environment variables
const result = envSchema.safeParse(process.env);

if (!result.success) {
    console.error("Invalid environment variables:", result.error.format());
    process.exit(1);
}

export const env = result.data;