// "use strict";
import sql from "../config/neonConfig.js";

export default async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    // const _ = await sql`DROP TABLE users`;
    const result =
      // await sql`CREATE TABLE IF NOT EXISTS users(id SERIAL, firstName VARCHAR(50), lastName VARCHAR(50), email VARCHAR(50), password VARCHAR(255))`;
      await sql`SELECT * FROM users`;

    return result;
  });
}
