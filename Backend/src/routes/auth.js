import { userLogin } from "../controllers/Auth/userLogin.js";

export default async function (fastify, opts) {
  // Auth & Login Routes
  fastify.post("/auth/login", userLogin);

  // Add more routes as needed
  // Example: fastify.get("/auth/logout", userLogout);
}