import { createUserByEmail } from "../controllers/User/create.js";

export default async function (fastify, opts) {

  // passwordless creation
  fastify.post("/user/passwordless", createUserByEmail);
}
