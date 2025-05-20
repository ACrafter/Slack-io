import { createUserByEmail } from "../controllers/User/create.js";

export default async function (fastify, opts) {
  fastify.post("/auth/passwordless", createUserByEmail);
}
