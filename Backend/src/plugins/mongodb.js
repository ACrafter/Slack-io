import fastifyPlugin from "fastify-plugin";
import fastifyMongodb from "@fastify/mongodb";

async function mongoConnector(fastify, options) {
  fastify.register(fastifyMongodb, {
    url: process.env.MONGODB_URL || "mongodb://localhost:27017/slack-io",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default fastifyPlugin(mongoConnector);
