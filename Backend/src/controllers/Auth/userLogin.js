import sql from "../../config/neonConfig.js";

export const userLogin = async function (request, reply) {
  const { email, loginCode } = request.body;

  try {
    const result = await sql`
      SELECT * FROM users 
      WHERE email = ${email} 
      AND pass_code = ${loginCode} 
      AND pass_code_expiry > ${Date.now()}
    `;

    
    if (result.length) {
      reply.send({ success: true, message: "Login successful" });
    } else {
      reply.code(401).send({ success: false, message: "Invalid login code or expired" });
    }
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
}