// routes/swagger-routes.ts

import { Hono } from "hono";
import { swaggerUI } from "@hono/swagger-ui";
// Change named import to default import
import { openapi } from "./middlewares/openapi.js";


export const swaggerRoutes = new Hono();

swaggerRoutes.get("/", swaggerUI({ url: "/ui/swagger.json" }));

// ✅ Raw OpenAPI JSON served at /ui/swagger.json
swaggerRoutes.get("/swagger.json", (c) => c.json(openapi));