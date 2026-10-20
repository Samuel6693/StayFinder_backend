import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { env } from "./env.js";

const app = new Hono();

app.get("/", (c) => c.json({ message: "Hello from Hono!" }));

serve({
    port: env.PORT,
    fetch: app.fetch
},
    (info) => {
        console.log(`Server running on http://localhost:${info.port}`);
    }
);
