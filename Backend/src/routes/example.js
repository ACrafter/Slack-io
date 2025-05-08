/** @param {import('fastify').FastifyInstance} fastify */
export default async function (fastify, opts) {
  const collection = fastify.mongo.client.db("slack").collection("messages");

  fastify.get("/examples", async (request, reply) => {
    const result = await collection.find().toArray();
    return result;
  });

  fastify.post("/examples", async (request, reply) => {
    const { name, description } = request.body;
    const result = await collection.insertOne({
      name,
      description,
      createdAt: new Date(),
    });
    return result;
  });
}
