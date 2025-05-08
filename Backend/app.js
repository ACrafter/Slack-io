// ESM
import Fastify from "fastify";
import dotenv from "dotenv";
import autoload from "@fastify/autoload";
// import fastifyMultipart from "@fastify/multipart";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Get current file path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const fastify = Fastify({
  logger: true,
});

// Register Plugins

// fastify.register(fastifyMultipart, {
//   attachFieldsToBody: true,
//   limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
// });

await fastify.register(autoload, {
  dir: join(__dirname, "src/plugins"),
});

// Register all routes in the routes directory
await fastify.register(autoload, {
  dir: join(__dirname, "src/routes"),
  options: { prefix: "/api" }, // This will prefix all routes with /api
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 8000 });
    fastify.log.info(
      `Server is now listening on ${fastify.server.address().port}`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
